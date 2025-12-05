#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_LINE 512
#define MAX_NAME 100

const char *STUDENT_FILE = "students.txt";
const char *FACULTY_FILE = "faculty.txt";
const char *ATTEND_FILE  = "attendance.txt";
const char *GRADE_FILE   = "grades.txt";

void flush_stdin() {
    int ch; while ((ch = getchar()) != '\n' && ch != EOF) {}
}

void pause_console() {
    printf("\nPress Enter to continue..."); getchar();
}

void current_date_str(char *buf, size_t n) {
    time_t now = time(NULL);
    struct tm *t = localtime(&now);
    snprintf(buf, n, "%04d-%02d-%02d", t->tm_year + 1900, t->tm_mon + 1, t->tm_mday);
}

typedef struct {
    char studentId[32];
    char studentName[MAX_NAME];
    char department[64];
    int  academicYear;
    char phoneNumber[32];
} Student;

typedef struct {
    char facultyId[32];
    char facultyName[MAX_NAME];
    char department[64];
    char jobTitle[64];
} Faculty;

void add_student() {
    Student s;

    printf("Enter student ID: "); scanf("%31s", s.studentId); flush_stdin();
    printf("Full name: "); fgets(s.studentName, MAX_NAME, stdin); s.studentName[strcspn(s.studentName, "\n")] = 0;
    printf("Department: "); fgets(s.department, 64, stdin); s.department[strcspn(s.department, "\n")] = 0;
    printf("Academic Year: "); scanf("%d", &s.academicYear); flush_stdin();
    printf("Phone: "); fgets(s.phoneNumber, 32, stdin); s.phoneNumber[strcspn(s.phoneNumber, "\n")] = 0;

    FILE *file = fopen(STUDENT_FILE, "a");
    fprintf(file, "%s,%s,%s,%d,%s\n", s.studentId, s.studentName, s.department, s.academicYear, s.phoneNumber);
    fclose(file);

    printf("Student added.\n");
}

void list_students() {
    FILE *f = fopen(STUDENT_FILE, "r"); if (!f) { printf("No student file.\n"); return; }
    char line[MAX_LINE];
    printf("\nID\tName\tDepartment\tYear\tPhone\n");
    while (fgets(line, sizeof(line), f)) printf("%s", line);
    fclose(f);
    pause_console();
}

void search_student() {
    int choice;
    printf("\n--- Search Students ---\n1. By ID\n2. By Name\n3. By Department\n> ");
    scanf("%d", &choice); flush_stdin();

    char term[100];
    printf("Enter search term: "); fgets(term, 100, stdin); term[strcspn(term, "\n")] = 0;

    FILE *f = fopen(STUDENT_FILE, "r"); if (!f) { printf("No student file.\n"); return; }

    char line[MAX_LINE]; int found = 0;
    while (fgets(line, sizeof(line), f)) {
        char copy[MAX_LINE]; strcpy(copy, line);
        char *id = strtok(copy, ",");
        char *name = strtok(NULL, ",");
        char *dept = strtok(NULL, ",");
        strtok(NULL, ","); strtok(NULL, ",");

        if ((choice==1 && strcmp(id, term)==0) ||
            (choice==2 && strcasestr(name, term)) ||
            (choice==3 && strcasestr(dept, term))) {
            printf("%s", line);
            found = 1;
        }
    }
    if (!found) printf("No matching records.\n");
    fclose(f);
    pause_console();
}

void add_faculty() {
    Faculty f;

    printf("Enter Faculty ID: "); scanf("%31s", f.facultyId); flush_stdin();
    printf("Full name: "); fgets(f.facultyName, MAX_NAME, stdin); f.facultyName[strcspn(f.facultyName, "\n")] = 0;
    printf("Department: "); fgets(f.department, 64, stdin); f.department[strcspn(f.department, "\n")] = 0;
    printf("Job Title: "); fgets(f.jobTitle, 64, stdin); f.jobTitle[strcspn(f.jobTitle, "\n")] = 0;

    FILE *file = fopen(FACULTY_FILE, "a");
    fprintf(file, "%s,%s,%s,%s\n", f.facultyId, f.facultyName, f.department, f.jobTitle);
    fclose(file);

    printf("Faculty added.\n");
}

void list_faculty() {
    FILE *f = fopen(FACULTY_FILE, "r"); if (!f) { printf("No faculty file.\n"); return; }
    char line[MAX_LINE];
    printf("\nID\tName\tDepartment\tTitle\n");
    while (fgets(line, sizeof(line), f)) printf("%s", line);
    fclose(f);
    pause_console();
}

void mark_attendance() {
    char id[32], date[16]; current_date_str(date, sizeof(date));

    printf("Enter Student ID: "); scanf("%31s", id); flush_stdin();
    char yn; printf("Present? (y/n): "); scanf("%c", &yn); flush_stdin();

    FILE *f = fopen(ATTEND_FILE, "a");
    fprintf(f, "%s,%s,%d\n", id, date, (yn=='y'||yn=='Y'));
    fclose(f);

    printf("Attendance recorded.\n");
}

void view_attendance() {
    char id[32]; printf("Enter student ID: "); scanf("%31s", id); flush_stdin();

    FILE *f = fopen(ATTEND_FILE, "r"); if (!f) { printf("No attendance file.\n"); return; }

    char line[MAX_LINE]; int total=0, present=0;
    printf("\nDate\tPresent\n");
    while (fgets(line, sizeof(line), f)) {
        char *sid = strtok(line, ",");
        char *date = strtok(NULL, ",");
        char *p = strtok(NULL, ",");
        if (strcmp(sid, id)==0) {
            total++; int isP = atoi(p);
            if (isP) present++;
            printf("%s\t%s\n", date, isP?"Yes":"No");
        }
    }
    if (total) printf("\nAttendance: %d/%d (%.2f%%)\n", present,total, present*100.0/total);
    else printf("No records.\n");
    fclose(f);
    pause_console();
}

void add_grade() {
    char studentId[32]; char course[64]; float mark;
    printf("Student ID: "); scanf("%31s", studentId); flush_stdin();
    printf("Course: "); fgets(course, 64, stdin); course[strcspn(course, "\n")] = 0;
    printf("Mark: "); scanf("%f", &mark); flush_stdin();

    FILE *f = fopen(GRADE_FILE, "a");
    fprintf(f, "%s,%s,%.2f\n", studentId, course, mark);
    fclose(f);
    printf("Grade added.\n");
}

void view_grades() {
    char id[32]; printf("Enter Student ID: "); scanf("%31s", id); flush_stdin();
    FILE *f = fopen(GRADE_FILE, "r"); if (!f) { printf("No grade file.\n"); return; }

    char line[MAX_LINE];
    printf("\nCourse\tMarks\n");
    while (fgets(line, sizeof(line), f)) {
        char *sid = strtok(line, ",");
        char *course = strtok(NULL, ",");
        char *mark = strtok(NULL, ",");
        if (strcmp(sid, id)==0) printf("%s\t%s", course, mark);
    }
    fclose(f);
    pause_console();
}

void student_menu() {
    while (1) {
        printf("\n--- Student Menu ---\n1. View Attendance\n2. View Grades\n3. Back\n> ");
        int c; scanf("%d", &c); flush_stdin();
        if (c==1) view_attendance();
        else if (c==2) view_grades();
        else return;
    }
}

void teacher_menu() {
    while (1) {
        printf("\n--- Teacher Menu ---\n1. Mark Attendance\n2. Add Grades\n3. List Students\n4. Back\n> ");
        int c; scanf("%d", &c); flush_stdin();
        if (c==1) mark_attendance();
        else if (c==2) add_grade();
        else if (c==3) list_students();
        else return;
    }
}

void admin_menu() {
    while (1) {
        printf("\n===== ADMIN MENU =====\n1. Student Management\n2. Faculty Management\n3. Attendance\n4. Grades\n5. Logout\n> ");
        int c; scanf("%d", &c); flush_stdin();
        if (c==1) {
            while (1) {
                printf("\n--- Student Management ---\n1. Add student\n2. List students\n3. Search\n4. Back\n> ");
                int x; scanf("%d", &x); flush_stdin();
                if (x==1) add_student();
                else if (x==2) list_students();
                else if (x==3) search_student();
                else break;
            }
        } else if (c==2) {
            while (1) {
                printf("\n--- Faculty Management ---\n1. Add faculty\n2. List faculty\n3. Back\n> ");
                int x; scanf("%d", &x); flush_stdin();
                if (x==1) add_faculty();
                else if (x==2) list_faculty();
                else break;
            }
        } else if (c==3) mark_attendance();
        else if (c==4) add_grade();
        else return;
    }
}

int main() {
    while (1) {
        printf("\n===== MAIN MENU =====\n1. Admin Panel\n2. Student Portal\n3. Teacher Portal\n4. Exit\n> ");
        int c; scanf("%d", &c); flush_stdin();

        if (c==1) admin_menu();
        else if (c==2) student_menu();
        else if (c==3) teacher_menu();
        else if (c==4) { printf("Goodbye.\n"); break; }
        else printf("Invalid option.\n");
    }

    return 0;
}
