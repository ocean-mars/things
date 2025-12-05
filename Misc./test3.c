#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_LINE 512
#define MAX_NAME 100

const char *STUDENT_FILE = "students.txt";
const char *FACULTY_FILE = "faculty.txt";
const char *ATTEND_FILE = "attendance.txt";
const char *GRADE_FILE = "grades.txt";

void flush_stdin() {
    int ch;
    while ((ch = getchar()) != '\n' && ch != EOF) {}
}

void pause_console() {
    printf("\nPress Enter to continue...");
    getchar();
}

void current_date_str(char *buf, size_t n) {
    time_t now = time(NULL);
    struct tm *t = localtime(&now);
    snprintf(buf, n, "%04d-%02d-%02d", t->tm_year + 1900, t->tm_mon + 1, t->tm_mday);
}

/*========= STRUCTURES =========*/
typedef struct {
    char studentId[32];
    char studentName[MAX_NAME];
    char department[64];
    int academicYear;
    char semester[16];     // NEW FIELD
    char phoneNumber[32];
} Student;

typedef struct {
    char facultyId[32];
    char facultyName[MAX_NAME];
    char department[64];
    char jobTitle[64];
} Faculty;

/*============ STUDENT FUNCTIONS ============*/

void add_student() {
    Student s;

    printf("Enter student ID: ");
    scanf("%31s", s.studentId);
    flush_stdin();

    printf("Full name: ");
    fgets(s.studentName, MAX_NAME, stdin);
    s.studentName[strcspn(s.studentName, "\n")] = 0;

    printf("Department: ");
    fgets(s.department, 64, stdin);
    s.department[strcspn(s.department, "\n")] = 0;

    printf("Academic Year: ");
    scanf("%d", &s.academicYear);
    flush_stdin();

    printf("Semester (Spring/Summer/Fall): ");
    fgets(s.semester, 16, stdin);
    s.semester[strcspn(s.semester, "\n")] = 0;

    printf("Phone: ");
    fgets(s.phoneNumber, 32, stdin);
    s.phoneNumber[strcspn(s.phoneNumber, "\n")] = 0;

    FILE *file = fopen(STUDENT_FILE, "a");
    if (!file) {
        printf("Error opening file.\n");
        return;
    }

    fprintf(file, "%s,%s,%s,%d,%s,%s\n",
        s.studentId,
        s.studentName,
        s.department,
        s.academicYear,
        s.semester,
        s.phoneNumber
    );

    fclose(file);
    printf("Student added successfully.\n");
}

void list_students() {
    FILE *file = fopen(STUDENT_FILE, "r");
    if (!file) {
        printf("Student file not found.\n");
        return;
    }

    char line[MAX_LINE];

    printf("\nID\tName\tDepartment\tYear\tSemester\tPhone\n");
    printf("--------------------------------------------------------------------------\n");

    while (fgets(line, sizeof(line), file)) {
        printf("%s", line);
    }

    fclose(file);
    pause_console();
}

void search_student() {
    int choice;
    char term[100];

    printf("\n--- Search Students ---\n");
    printf("1. By ID\n2. By Name\n3. By Department\n4. By Semester\n> ");
    scanf("%d", &choice);
    flush_stdin();

    printf("Enter search term: ");
    fgets(term, 100, stdin);
    term[strcspn(term, "\n")] = 0;

    FILE *f = fopen(STUDENT_FILE, "r");
    if (!f) {
        printf("No student file found.\n");
        return;
    }

    char line[MAX_LINE];
    int found = 0;

    while (fgets(line, sizeof(line), f)) {
        char copy[MAX_LINE];
        strcpy(copy, line);

        char *id = strtok(copy, ",");
        char *name = strtok(NULL, ",");
        char *dept = strtok(NULL, ",");
        strtok(NULL, ",");               // year
        char *sem = strtok(NULL, ",");   // NEW
        strtok(NULL, ",");               // phone

        if ((choice == 1 && strcmp(id, term) == 0) ||
            (choice == 2 && strstr(name, term)) ||
            (choice == 3 && strstr(dept, term)) ||
            (choice == 4 && strstr(sem, term))) {

            printf("%s", line);
            found = 1;
        }
    }

    if (!found) printf("No matching student found.\n");

    fclose(f);
    pause_console();
}

/*============ FACULTY FUNCTIONS ============*/

void add_faculty() {
    Faculty f;

    printf("Enter Faculty ID: ");
    scanf("%31s", f.facultyId);
    flush_stdin();

    printf("Full name: ");
    fgets(f.facultyName, MAX_NAME, stdin);
    f.facultyName[strcspn(f.facultyName, "\n")] = 0;

    printf("Department: ");
    fgets(f.department, 64, stdin);
    f.department[strcspn(f.department, "\n")] = 0;

    printf("Job Title: ");
    fgets(f.jobTitle, 64, stdin);
    f.jobTitle[strcspn(f.jobTitle, "\n")] = 0;

    FILE *file = fopen(FACULTY_FILE, "a");
    if (!file) {
        printf("Error opening file.\n");
        return;
    }

    fprintf(file, "%s,%s,%s,%s\n",
        f.facultyId, f.facultyName, f.department, f.jobTitle);

    fclose(file);
    printf("Faculty added successfully.\n");
}

void list_faculty() {
    FILE *file = fopen(FACULTY_FILE, "r");
    if (!file) {
        printf("Faculty file not found.\n");
        return;
    }

    char line[MAX_LINE];

    printf("\nID\tName\tDepartment\tTitle\n");
    printf("--------------------------------------------------\n");

    while (fgets(line, sizeof(line), file)) {
        printf("%s", line);
    }

    fclose(file);
    pause_console();
}

/*============ ATTENDANCE FUNCTIONS ============*/

void mark_attendance() {
    char id[32];
    char date[16];

    current_date_str(date, sizeof(date));

    printf("Enter Student ID: ");
    scanf("%31s", id);
    flush_stdin();

    char yn;
    printf("Present? (y/n): ");
    scanf("%c", &yn);
    flush_stdin();

    FILE *f = fopen(ATTEND_FILE, "a");
    if (!f) {
        printf("Error opening attendance file.\n");
        return;
    }

    fprintf(f, "%s,%s,%d\n", id, date, (yn=='y'||yn=='Y'));
    fclose(f);

    printf("Attendance recorded.\n");
}

void view_attendance() {
    char id[32];

    printf("Enter student ID: ");
    scanf("%31s", id);
    flush_stdin();

    FILE *f = fopen(ATTEND_FILE, "r");
    if (!f) {
        printf("Attendance file not found.\n");
        return;
    }

    char line[MAX_LINE];
    int total = 0, present = 0;

    printf("\nDate\t\tPresent\n");
    printf("---------------------------\n");

    while (fgets(line, sizeof(line), f)) {
        char *sid = strtok(line, ",");
        char *date = strtok(NULL, ",");
        char *p = strtok(NULL, ",");

        if (strcmp(sid, id)==0) {
            int isP = atoi(p);
            printf("%s\t%s\n", date, isP ? "Yes" : "No");
            total++;
            if (isP) present++;
        }
    }

    if (total > 0)
        printf("\nAttendance: %d/%d (%.2f%%)\n", present, total, (present*100.0)/total);
    else
        printf("No attendance records found.\n");

    fclose(f);
    pause_console();
}

/*============ GRADES FUNCTIONS ============*/

void add_grade() {
    char studentId[32];
    char course[64];
    float mark;

    printf("Student ID: ");
    scanf("%31s", studentId);
    flush_stdin();

    printf("Course: ");
    fgets(course, 64, stdin);
    course[strcspn(course, "\n")] = 0;

    printf("Mark: ");
    scanf("%f", &mark);
    flush_stdin();

    FILE *f = fopen(GRADE_FILE, "a");
    if (!f) {
        printf("Error opening grades file.\n");
        return;
    }

    fprintf(f, "%s,%s,%.2f\n", studentId, course, mark);
    fclose(f);

    printf("Grade added.\n");
}

void view_grades() {
    char id[32];

    printf("Enter Student ID: ");
    scanf("%31s", id);
    flush_stdin();

    FILE *f = fopen(GRADE_FILE, "r");
    if (!f) {
        printf("No grade file.\n");
        return;
    }

    char line[MAX_LINE];

    printf("\nCourse\tMarks\n");
    printf("----------------------\n");

    while (fgets(line, sizeof(line), f)) {
        char *sid = strtok(line, ",");
        char *course = strtok(NULL, ",");
        char *mark = strtok(NULL, ",");

        if (strcmp(sid, id)==0) {
            printf("%s\t%s", course, mark);
        }
    }

    fclose(f);
    pause_console();
}

/*============ MENUS ============*/

void student_menu() {
    while (1) {
        printf("\n--- Student Menu ---\n");
        printf("1. View Attendance\n");
        printf("2. View Grades\n");
        printf("3. Back\n> ");

        int c;
        scanf("%d", &c);
        flush_stdin();

        if (c == 1) view_attendance();
        else if (c == 2) view_grades();
        else return;
    }
}

void teacher_menu() {
    while (1) {
        printf("\n--- Teacher Menu ---\n");
        printf("1. Mark Attendance\n");
        printf("2. Add Grades\n");
        printf("3. List Students\n");
        printf("4. Back\n> ");

        int c;
        scanf("%d", &c);
        flush_stdin();

        if (c==1) mark_attendance();
        else if (c==2) add_grade();
        else if (c==3) list_students();
        else return;
    }
}

void admin_menu() {
    while (1) {
        printf("\n===== ADMIN MENU =====\n");
        printf("1. Student Management\n");
        printf("2. Faculty Management\n");
        printf("3. Attendance\n");
        printf("4. Grades\n");
        printf("5. Logout\n> ");

        int c;
        scanf("%d", &c);
        flush_stdin();

        if (c == 1) {
            while (1) {
                printf("\n--- Student Management ---\n");
                printf("1. Add student\n");
                printf("2. List students\n");
                printf("3. Search\n");
                printf("4. Back\n> ");

                int x;
                scanf("%d", &x);
                flush_stdin();

                if (x==1) add_student();
                else if (x==2) list_students();
                else if (x==3) search_student();
                else break;
            }
        }

        else if (c == 2) {
            while (1) {
                printf("\n--- Faculty Management ---\n");
                printf("1. Add faculty\n");
                printf("2. List faculty\n");
                printf("3. Back\n> ");

                int x;
                scanf("%d", &x);
                flush_stdin();

                if (x==1) add_faculty();
                else if (x==2) list_faculty();
                else break;
            }
        }

        else if (c==3) mark_attendance();
        else if (c==4) add_grade();
        else return;
    }
}

/*============ MAIN ============*/

int main() {
    while (1) {
        printf("\n===== MAIN MENU =====\n");
        printf("1. Admin Panel\n");
        printf("2. Student Portal\n");
        printf("3. Teacher Portal\n");
        printf("4. Exit\n> ");

        int c;
        scanf("%d", &c);
        flush_stdin();

        if (c==1) admin_menu();
        else if (c==2) student_menu();
        else if (c==3) teacher_menu();
        else if (c==4) {
            printf("Goodbye.\n");
            break;
        }
        else {
            printf("Invalid option.\n");
        }
    }

    return 0;
}
