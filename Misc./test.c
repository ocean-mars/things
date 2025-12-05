#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_LINE 512
#define MAX_NAME 100

void flush_stdin() {
int ch;
while ((ch = getchar()) != '\n' && ch != EOF) {}
}

void pause_console() {
printf("\nPress Enter to continue...");
getchar();
}

/* Data Structures */

typedef struct {
char studentId[32];
char studentName[MAX_NAME];
char department[64];
int academicYear;
char phoneNumber[32];
} Student;

typedef struct {
char facultyId[32];
char facultyName[MAX_NAME];
char department[64];
char jobTitle[64];
} Faculty;

typedef struct {
char studentId[32];
char attendanceDate[16];
int isPresent;
} Attendance;

typedef struct {
char studentId[32];
char courseName[64];
float markValue;
} Grade;

/* TXT Files */

const char *STUDENT_FILE = "students.txt";
const char *FACULTY_FILE = "faculty.txt";
const char *ATTEND_FILE = "attendance.txt";
const char *GRADE_FILE = "grades.txt";

/* Date helper — REPLACED snprintf WITH fprintf USING fmemopen() */

void current_date_str(char *buf, size_t n) {
time_t now = time(NULL);
struct tm *today = localtime(&now);

FILE *mem = fmemopen(buf, n, "w");
if (mem == NULL) return;

fprintf(mem, "%04d-%02d-%02d",
today->tm_year + 1900,
today->tm_mon + 1,
today->tm_mday);

fclose(mem);
}

/* STUDENT MODULE */

void add_student() {
Student newStudent;

printf("Enter student ID: ");
scanf("%31s", newStudent.studentId);
flush_stdin();

printf("Enter full name: ");
fgets(newStudent.studentName, sizeof(newStudent.studentName), stdin);
newStudent.studentName[strcspn(newStudent.studentName, "\n")] = 0;

printf("Enter department: ");
fgets(newStudent.department, sizeof(newStudent.department), stdin);
newStudent.department[strcspn(newStudent.department, "\n")] = 0;

printf("Enter academic year: ");
scanf("%d", &newStudent.academicYear);
flush_stdin();

printf("Enter phone number: ");
fgets(newStudent.phoneNumber, sizeof(newStudent.phoneNumber), stdin);
newStudent.phoneNumber[strcspn(newStudent.phoneNumber, "\n")] = 0;

FILE *file = fopen(STUDENT_FILE, "a");
fprintf(file, "%s,%s,%s,%d,%s\n",
newStudent.studentId,
newStudent.studentName,
newStudent.department,
newStudent.academicYear,
newStudent.phoneNumber);
fclose(file);

printf("Student added successfully.\n");
}

void list_students() {
FILE *file = fopen(STUDENT_FILE, "r");
if (!file) {
printf("No student records found.\n");
return;
}

char line[MAX_LINE];
printf("\nID\tName\tDepartment\tYear\tPhone\n");

while (fgets(line, sizeof(line), file)) {
char *studentId = strtok(line, ",");
char *studentName = strtok(NULL, ",");
char *department = strtok(NULL, ",");
char *year = strtok(NULL, ",");
char *phone = strtok(NULL, ",");

if (studentId)
printf("%s\t%s\t%s\t%s\t%s",
studentId, studentName, department, year, phone);
}

fclose(file);
pause_console();
}

int edit_student(const char *targetId) {
FILE *file = fopen(STUDENT_FILE, "r");
if (!file) return 0;

FILE *tempFile = fopen("students_tmp.txt", "w");

char line[MAX_LINE];
int updated = 0;

while (fgets(line, sizeof(line), file)) {
char backupLine[MAX_LINE];
strcpy(backupLine, line);

char *studentId = strtok(line, ",");

if (strcmp(studentId, targetId) == 0) {
Student editedStudent;
strcpy(editedStudent.studentId, targetId);

printf("Enter new name: ");
fgets(editedStudent.studentName, sizeof(editedStudent.studentName), stdin);
editedStudent.studentName[strcspn(editedStudent.studentName, "\n")] = 0;

printf("Enter new department: ");
fgets(editedStudent.department, sizeof(editedStudent.department), stdin);
editedStudent.department[strcspn(editedStudent.department, "\n")] = 0;

printf("Enter new year: ");
scanf("%d", &editedStudent.academicYear);
flush_stdin();

printf("Enter new phone: ");
fgets(editedStudent.phoneNumber, sizeof(editedStudent.phoneNumber), stdin);
editedStudent.phoneNumber[strcspn(editedStudent.phoneNumber, "\n")] = 0;

fprintf(tempFile, "%s,%s,%s,%d,%s\n",
editedStudent.studentId,
editedStudent.studentName,
editedStudent.department,
editedStudent.academicYear,
editedStudent.phoneNumber);

updated = 1;
} else {
fputs(backupLine, tempFile);
}
}

fclose(file);
fclose(tempFile);

remove(STUDENT_FILE);
rename("students_tmp.txt", STUDENT_FILE);

return updated;
}

void delete_student(const char *targetId) {
FILE *file = fopen(STUDENT_FILE, "r");
if (!file) return;

FILE *tempFile = fopen("students_tmp.txt", "w");

char line[MAX_LINE];
int deleted = 0;

while (fgets(line, sizeof(line), file)) {
char backupLine[MAX_LINE];
strcpy(backupLine, line);

char *studentId = strtok(line, ",");

if (strcmp(studentId, targetId) == 0)
deleted = 1;
else
fputs(backupLine, tempFile);
}

fclose(file);
fclose(tempFile);

remove(STUDENT_FILE);
rename("students_tmp.txt", STUDENT_FILE);

if (deleted)
printf("Student deleted successfully.\n");
else
printf("Student not found.\n");
}

/* FACULTY MODULE */

void add_faculty() {
Faculty newFaculty;

printf("Enter faculty ID: ");
scanf("%31s", newFaculty.facultyId);
flush_stdin();

printf("Enter full name: ");
fgets(newFaculty.facultyName, sizeof(newFaculty.facultyName), stdin);
newFaculty.facultyName[strcspn(newFaculty.facultyName, "\n")] = 0;

printf("Enter department: ");
fgets(newFaculty.department, sizeof(newFaculty.department), stdin);
newFaculty.department[strcspn(newFaculty.department, "\n")] = 0;

printf("Enter job title: ");
fgets(newFaculty.jobTitle, sizeof(newFaculty.jobTitle), stdin);
newFaculty.jobTitle[strcspn(newFaculty.jobTitle, "\n")] = 0;

FILE *file = fopen(FACULTY_FILE, "a");
fprintf(file, "%s,%s,%s,%s\n",
newFaculty.facultyId,
newFaculty.facultyName,
newFaculty.department,
newFaculty.jobTitle);
fclose(file);

printf("Faculty record added.\n");
}

void list_faculty() {
FILE *file = fopen(FACULTY_FILE, "r");
if (!file) {
printf("No faculty records found.\n");
return;
}

char line[MAX_LINE];
printf("\nID\tName\tDepartment\tTitle\n");

while (fgets(line, sizeof(line), file)) {
char *facultyId = strtok(line, ",");
char *facultyName = strtok(NULL, ",");
char *department = strtok(NULL, ",");
char *title = strtok(NULL, ",");

printf("%s\t%s\t%s\t%s",
facultyId, facultyName, department, title);
}

fclose(file);
pause_console();
}

/* ATTENDANCE MODULE */

void mark_attendance() {
char studentId[32];
char todayDate[16];

current_date_str(todayDate, sizeof(todayDate));

printf("Enter student ID: ");
scanf("%31s", studentId);
flush_stdin();

char markValue;
printf("Is the student present? (y/n): ");
scanf("%c", &markValue);
flush_stdin();

int isPresent = (markValue == 'y' || markValue == 'Y');

FILE *file = fopen(ATTEND_FILE, "a");
fprintf(file, "%s,%s,%d\n", studentId, todayDate, isPresent);
fclose(file);

printf("Attendance recorded.\n");
}

void view_attendance() {
char studentId[32];

printf("Enter student ID: ");
scanf("%31s", studentId);
flush_stdin();

FILE *file = fopen(ATTEND_FILE, "r");
if (!file) {
printf("No attendance records available.\n");
return;
}

char line[MAX_LINE];
int presentCount = 0, totalCount = 0;

printf("\nDate\tPresent\n");

while (fgets(line, sizeof(line), file)) {
char *id = strtok(line, ",");
char *date = strtok(NULL, ",");
char *present = strtok(NULL, ",");

if (strcmp(id, studentId) == 0) {
totalCount++;
printf("%s\t%s\n", date, atoi(present) ? "Yes" : "No");

if (atoi(present))
presentCount++;
}
}

fclose(file);

if (totalCount > 0)
printf("\nAttendance: %d/%d (%.2f%%)\n",
presentCount, totalCount,
(presentCount * 100.0) / totalCount);
else
printf("No attendance found for this student.\n");

pause_console();
}

/* GRADES MODULE */

void add_grade() {
Grade newGrade;

printf("Enter student ID: ");
scanf("%31s", newGrade.studentId);
flush_stdin();

printf("Enter course name: ");
fgets(newGrade.courseName, sizeof(newGrade.courseName), stdin);
newGrade.courseName[strcspn(newGrade.courseName, "\n")] = 0;

printf("Enter marks: ");
scanf("%f", &newGrade.markValue);
flush_stdin();

FILE *file = fopen(GRADE_FILE, "a");
fprintf(file, "%s,%s,%.2f\n",
newGrade.studentId,
newGrade.courseName,
newGrade.markValue);
fclose(file);

printf("Grade added.\n");
}

void list_grades() {
char studentId[32];

printf("Enter student ID: ");
scanf("%31s", studentId);
flush_stdin();

FILE *file = fopen(GRADE_FILE, "r");
if (!file) {
printf("No grade records.\n");
return;
}

char line[MAX_LINE];
printf("\nCourse\tMarks\n");

while (fgets(line, sizeof(line), file)) {
char *id = strtok(line, ",");
char *course = strtok(NULL, ",");
char *marks = strtok(NULL, ",");

if (strcmp(id, studentId) == 0)
printf("%s\t%s\n", course, marks);
}

fclose(file);
pause_console();
}

/* MENUS */

void student_menu() {
while (1) {
printf("\n--- Student Menu ---\n");
printf("1. Add student\n");
printf("2. List students\n");
printf("3. Edit student\n");
printf("4. Delete student\n");
printf("5. Back\n> ");

int choice;
scanf("%d", &choice); flush_stdin();

if (choice == 1) add_student();
else if (choice == 2) list_students();
else if (choice == 3) {
char studentId[32];
printf("Enter student ID: ");
scanf("%31s", studentId); flush_stdin();
if (!edit_student(studentId))
printf("Student not found.\n");
}
else if (choice == 4) {
char studentId[32];
printf("Enter student ID: ");
scanf("%31s", studentId); flush_stdin();
delete_student(studentId);
}
else return;
}
}

void faculty_menu() {
while (1) {
printf("\n--- Faculty Menu ---\n");
printf("1. Add faculty\n");
printf("2. List faculty\n");
printf("3. Back\n> ");

int choice;
scanf("%d", &choice); flush_stdin();

if (choice == 1) add_faculty();
else if (choice == 2) list_faculty();
else return;
}
}

void attendance_menu() {
while (1) {
printf("\n--- Attendance Menu ---\n");
printf("1. Mark attendance\n");
printf("2. View attendance\n");
printf("3. Back\n> ");

int choice;
scanf("%d", &choice); flush_stdin();

if (choice == 1) mark_attendance();
else if (choice == 2) view_attendance();
else return;
}
}

void grade_menu() {
while (1) {
printf("\n--- Grades Menu ---\n");
printf("1. Add grade\n");
printf("2. View grades\n");
printf("3. Back\n> ");

int choice;
scanf("%d", &choice); flush_stdin();

if (choice == 1) add_grade();
else if (choice == 2) list_grades();
else return;
}
}

/* MAIN */

int main() {
printf("Smart Campus Management System\n");

while (1) {
printf("\n===== MAIN MENU =====\n");
printf("1. Student Management\n");
printf("2. Faculty Management\n");
printf("3. Attendance\n");
printf("4. Grades\n");
printf("5. Exit\n> ");

int choice;
scanf("%d", &choice); flush_stdin();

if (choice == 1) student_menu();
else if (choice == 2) faculty_menu();
else if (choice == 3) attendance_menu();
else if (choice == 4) grade_menu();
else if (choice == 5) {
printf("Exiting system...\n");
break;
}
else
printf("Invalid choice. Try again.\n");
}

return 0;
}
