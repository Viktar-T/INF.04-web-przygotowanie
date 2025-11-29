import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'course-waitlist-capacity',
  imports: [FormsModule],
  templateUrl: './course-waitlist-capacity.html',
  styleUrl: './course-waitlist-capacity.css',
})
export class CourseWaitlistCapacityComponent {
  courses: { id: number, name: string, capacity: number, enrolled: number }[] = [
    { id: 1, name: "Programowanie w C#", capacity: 20, enrolled: 15 },
    { id: 2, name: "Angular dla początkujących", capacity: 15, enrolled: 15 },
    { id: 3, name: "Kurs Django", capacity: 25, enrolled: 10 }
  ];
  selectedCourse = 0;
  fullname = ""

  onSubmit() {
    const theCourse = this.courses[this.courses.findIndex(e=> e.id == this.selectedCourse)];
    if (theCourse.enrolled == theCourse.capacity) {
      console.log(`Brak miejsc: ${theCourse.name}`);
      return;
    }
    theCourse.enrolled++;
    console.log(`Zapisano: ${this.fullname} na ${theCourse.name}`)
  }

}
