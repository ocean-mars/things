#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX 100
#define MAX_LINE 1024

// ====================== STRUCTURES ======================
typedef struct {
char id[20], name[MAX], phone[15], email[50], location[50];
char blood[5], gender[10], dob[12], semester[10], password[20];
} Student;

typedef struct {
char id[20], name[MAX], phone[15], email[50], location[50];
char blood[5], gender[10], joining[5], qualification[MAX], password[20];
} Faculty;

typedef struct { char studentId[20], date[12]; int present; } Attendance;
typedef struct { char studentId[20], course[50]; float marks; } Grade;

// ====================== FILES ======================
const char *STUDENTS = "students.txt";
const char *FACULTY = "faculty.txt";
const char *ATTENDANCE = "attendance.txt";
const char *GRADES = "grades.txt";

// ====================== UTILITIES ======================
void clear() { while(getchar()!='\n'); }
void pauseScreen() { printf("\nPress Enter to continue..."); getchar(); }

void getDate(char *d) {
time_t t = time(NULL);
struct tm *tm = localtime(&t);
sprintf(d, "%04d-%02d-%02d", tm->tm_year + 1900, tm->tm_mon + 1, tm->tm_mday);
}

float getGPA(float m) {
if(m>=90) return 4; if(m>=85) return 3.7; if(m>=80) return 3.3;
if(m>=75) return 3.0; if(m>=70) return 2.7; if(m>=65) return 2.3;
if(m>=60) return 2.0; if(m>=50) return 1.0; return 0.0;
}

// ====================== GENERIC INPUT HELPERS ======================
void inputStr(const char *msg, char *var) {
printf("%s", msg);
scanf("%s", var);
}

void inputLine(const char *msg, char *var) {
printf("%s", msg);
fgets(var, MAX, stdin);
var[strcspn(var, "\n")] = 0;
}

// ====================== LOGIN ======================
int checkLogin(const char *title, const char *correctId, const char *correctPass) {
char id[20], pass[20];
printf("=== %s ===\nUsername: ", title); scanf("%s", id);
printf("Password: "); scanf("%s", pass); clear();
return strcmp(id, correctId)==0 && strcmp(pass, correctPass)==0;
}

int admin1Login() { return checkLogin("ADMIN 1 LOGIN", "admin1", "admin123"); }
int admin2Login() { return checkLogin("ADMIN 2 LOGIN", "admin2", "faculty123"); }

int loginFromFile(const char *file, char *loggedId, int isStudent) {
char id[20], pass[20];
printf("Username: "); scanf("%s", id);
printf("Password: "); scanf("%s", pass); clear();

FILE *f = fopen(file, "r");
if(!f) { printf("No records!\n"); pauseScreen(); return 0; }

char line[MAX_LINE];
while(fgets(line, sizeof(line), f)) {
if(strstr(line, id) && strstr(line, pass)) {
strcpy(loggedId, id);
fclose(f);
return 1;
}
}
fclose(f);

printf("Invalid Credentials!\n");
pauseScreen();
return 0;
}

int studentLogin(char *id) { return loginFromFile(STUDENTS, id, 1); }
int facultyLogin(char *id) { return loginFromFile(FACULTY, id, 0); }

// ====================== STUDENT MANAGEMENT ======================
void addStudent() {
Student s;

inputStr("Student ID: ", s.id); clear();
inputLine("Full Name: ", s.name);
inputStr("Phone: ", s.phone);
inputStr("Email: ", s.email);
inputStr("Location: ", s.location);
inputStr("Blood Group: ", s.blood);
inputStr("Gender: ", s.gender);
inputStr("DOB (YYYY-MM-DD): ", s.dob);
inputStr("Semester: ", s.semester);
inputStr("Password: ", s.password); clear();

FILE *f = fopen(STUDENTS, "a");
fprintf(f, "%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n",
s.id, s.name, s.phone, s.email, s.location,
s.blood, s.gender, s.dob, s.semester, s.password);
fclose(f);

printf("Student Added!\n");
pauseScreen();
}

// ============= FIXED SPACING FOR STUDENT VIEW =============
void viewAllStudents() {
FILE *f = fopen(STUDENTS, "r");
if(!f) { printf("No students!\n"); pauseScreen(); return; }

printf("\n%-12s %-20s %-15s %-25s %-10s\n",
"ID", "Name", "Phone", "Email", "Semester");
printf("-------------------------------------------------------------------------------\n");

char line[MAX_LINE];
while(fgets(line, sizeof(line), f)) {
char id[50], name[50], phone[50], email[50], sem[50];

sscanf(line,"%[^,],%[^,],%[^,],%[^,],%*[^,],%*[^,],%*[^,],%*[^,],%[^,]",
id,name,phone,email,sem);

printf("%-12s %-20s %-15s %-25s %-10s\n",
id,name,phone,email,sem);
}

fclose(f);
pauseScreen();
}

void editStudent() {
char target[20];
inputStr("Enter Student ID: ", target); clear();

FILE *f = fopen(STUDENTS,"r");
FILE *tmp = fopen("temp.txt","w");

if(!f||!tmp){ printf("Error!\n"); pauseScreen(); return; }

char line[MAX_LINE];
int found=0;

while(fgets(line,sizeof(line),f)) {
Student s;
sscanf(line,"%[^,]",s.id);

if(strcmp(s.id,target)==0) {
found=1;
printf("Editing %s\n",target);
inputLine("New Name:",s.name);
inputStr("Phone: ",s.phone);
inputStr("Email: ",s.email);
inputStr("Location: ",s.location);
inputStr("Blood: ",s.blood);
inputStr("Gender: ",s.gender);
inputStr("DOB: ",s.dob);
inputStr("Semester: ",s.semester);
inputStr("Password: ",s.password);

fprintf(tmp,"%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n",
target,s.name,s.phone,s.email,s.location,
s.blood,s.gender,s.dob,s.semester,s.password);
}
else fputs(line,tmp);
}

fclose(f); fclose(tmp);
remove(STUDENTS); rename("temp.txt",STUDENTS);

printf(found? "Updated!\n":"Not Found!\n");
pauseScreen();
}

void deleteStudent() {
char target[20];
inputStr("Enter ID to Delete: ", target); clear();

FILE *f=fopen(STUDENTS,"r"), *tmp=fopen("temp.txt","w");
char line[MAX_LINE]; int found=0;

while(fgets(line,sizeof(line),f)) {
char id[20];
sscanf(line,"%[^,]",id);
if(strcmp(id,target)==0) found=1;
else fputs(line,tmp);
}

fclose(f); fclose(tmp);
remove(STUDENTS); rename("temp.txt",STUDENTS);

printf(found?"Deleted!\n":"Not Found!\n");
pauseScreen();
}

// ====================== FACULTY MGMT ======================

void addFaculty() {
Faculty f;
inputStr("Faculty ID: ", f.id); clear();
inputLine("Name: ", f.name);
inputStr("Phone: ", f.phone);
inputStr("Email: ", f.email);
inputStr("Location: ", f.location);
inputStr("Blood: ", f.blood);
inputStr("Gender: ", f.gender);
inputStr("Joining Year: ", f.joining);
clear();
inputLine("Qualification: ", f.qualification);
inputStr("Password: ", f.password);

FILE *file = fopen(FACULTY,"a");
fprintf(file,"%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n",
f.id,f.name,f.phone,f.email,f.location,
f.blood,f.gender,f.joining,f.qualification,f.password);
fclose(file);

printf("Faculty Added!\n");
pauseScreen();
}

// ============= FIXED SPACING FOR FACULTY VIEW =============
void viewAllFaculty() {
FILE *f=fopen(FACULTY,"r");
if(!f){ printf("No faculty!\n"); pauseScreen(); return; }

printf("\n%-12s %-20s %-15s %-25s %-25s\n",
"ID","Name","Phone","Email","Qualification");
printf("---------------------------------------------------------------------------------------------\n");

char line[MAX_LINE];
while(fgets(line,sizeof(line),f)) {
char id[20],name[50],phone[15],email[50],qual[100];

sscanf(line,"%[^,],%[^,],%[^,],%[^,],%*[^,],%*[^,],%*[^,],%*[^,],%[^,]",
id,name,phone,email,qual);

printf("%-12s %-20s %-15s %-25s %-25s\n",
id,name,phone,email,qual);
}

fclose(f);
pauseScreen();
}

// ====================== FACULTY ACTION ======================
void markAttendance() {
char sid[20], date[12], ch;
inputStr("Student ID: ", sid);
printf("Present (y/n): "); scanf(" %c",&ch); clear();
getDate(date);

FILE *f=fopen(ATTENDANCE,"a");
fprintf(f,"%s,%s,%d\n",sid,date,(ch=='y'||ch=='Y'));
fclose(f);

printf("Attendance marked!\n");
pauseScreen();
}

void giveMarks() {
char sid[20], course[50];
float marks;

inputStr("Student ID: ", sid); clear();
inputLine("Course: ", course);
printf("Marks: "); scanf("%f",&marks); clear();

FILE *f=fopen(GRADES,"a");
fprintf(f,"%s,%s,%.2f\n",sid,course,marks);
fclose(f);

printf("Saved! GPA: %.2f\n", getGPA(marks));
pauseScreen();
}

// ====================== STUDENT DASHBOARD ======================
void studentDashboard(char *sid) {
while(1) {
printf("\nSTUDENT DASHBOARD (%s)\n", sid);
printf("1. Profile\n2. Attendance\n3. Grades\n4. Logout\n> ");

int c; scanf("%d",&c); clear();

if(c==1) {
FILE *f=fopen(STUDENTS,"r");
char line[MAX_LINE];

while(fgets(line,sizeof(line),f)) {
Student s;
sscanf(line,"%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%[^,],%s",
s.id,s.name,s.phone,s.email,s.location,s.blood,
s.gender,s.dob,s.semester,s.password);

if(strcmp(s.id,sid)==0){
printf("\nName: %s\nPhone: %s\nEmail: %s\nBlood: %s\nGender: %s\nDOB: %s\nSemester: %s\n",
s.name,s.phone,s.email,s.blood,s.gender,s.dob,s.semester);
break;
}
}
fclose(f);
pauseScreen();
}

else if(c==2) {
FILE *f=fopen(ATTENDANCE,"r");
char id[20]; int tot=0, pre=0;
char line[MAX_LINE];

while(fgets(line,sizeof(line),f)) {
int p;
sscanf(line,"%[^,],%*[^,],%d",id,&p);
if(strcmp(id,sid)==0){ tot++; if(p) pre++; }
}
fclose(f);

printf("Attendance: %d/%d (%.2f%%)\n",pre,tot,tot?(pre*100.0/tot):0);
pauseScreen();
}

else if(c==3) {
FILE *f=fopen(GRADES,"r");
char line[MAX_LINE];

printf("\n%-25s %-10s %-5s\n","Course","Marks","GPA");
printf("-----------------------------------------------------\n");

while(fgets(line,sizeof(line),f)) {
char id[20], course[50]; float m;
sscanf(line,"%[^,],%[^,],%f",id,course,&m);
if(strcmp(id,sid)==0)
printf("%-25s %-10.2f %-5.2f\n",course,m,getGPA(m));
}
fclose(f);
pauseScreen();
}

else if(c==4) return;
}
}

// ====================== MAIN ======================
int main() {
char id[20];

while(1) {
printf("\nMAIN MENU\n1. Admin1(Student)\n2. Admin2(Faculty)\n3. Faculty\n4. Student\n5. Exit\n> ");
int choice; scanf("%d",&choice); clear();

if(choice==1 && admin1Login()) {
while(1) {
printf("\nADMIN1 MENU\n1.Add\n2.View\n3.Edit\n4.Delete\n5.Back\n> ");
int c; scanf("%d",&c); clear();
if(c==1) addStudent();
else if(c==2) viewAllStudents();
else if(c==3) editStudent();
else if(c==4) deleteStudent();
else break;
}
}

else if(choice==2 && admin2Login()) {
while(1) {
printf("\nADMIN2 MENU\n1.Add Faculty\n2.View Faculty\n3.Back\n> ");
int c; scanf("%d",&c); clear();
if(c==1) addFaculty();
else if(c==2) viewAllFaculty();
else break;
}
}

else if(choice==3 && facultyLogin(id)) {
while(1) {
printf("\nFACULTY MENU\n1.Mark Attendance\n2.Give Marks\n3.Back\n> ");
int c; scanf("%d",&c); clear();
if(c==1) markAttendance();
else if(c==2) giveMarks();
else break;
}
}

else if(choice==4 && studentLogin(id)) studentDashboard(id);

else if(choice==5) break;
}

printf("\nSystem Closed.\n");
return 0;
}
