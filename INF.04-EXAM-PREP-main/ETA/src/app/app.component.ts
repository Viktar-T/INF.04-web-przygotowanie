import { Component } from '@angular/core';
import { BOOKMGMTComponent } from './book-mgmt/book-mgmt.component';
import { DIETPLANComponent } from './diet-plan/diet-plan.component';
import { FAQACCORDIONComponent } from "./faq-accordion/faq-accordion.component";
import { FEEDBACKFORMCOUNTERComponent } from "./feedback-form-counter/feedback-form-counter.component";
import { MovieWatchlistComponent } from "./movie-watchlist/movie-watchlist.component";
import { PARKINGMETERComponent } from "./parking-meter/parking-meter.component";
import { TABSNAVPILLSComponent } from "./tabs-nav-pills/tabs-nav-pills.component";
import { QUIZMAKERComponent } from "./quiz-maker/quiz-maker.component";
import { SINGLEANSWERQUIZComponent } from "./single-answer-quiz/single-answer-quiz.component";
import { SORTABLETABLEComponent } from "./sortable-table/sortable-table.component";
import { CONTROLLEDUNCONTROLLEDTOGGLEComponent } from "./controlled-uncontrolled-toggle/controlled-uncontrolled-toggle.component";
import { CourseWaitlistCapacityComponent } from "./course-waitlist-capacity/course-waitlist-capacity";
import { APPOINTMENTPICKERComponent } from "./appointment-picker/appointment-picker.component";
import { PAGINATIONDEMOComponent } from "./pagination-demo/pagination-demo.component";
import { EXPENSETRACKComponent } from './expense-track/expense-track.component';
import { STARRATINGWIDGETComponent } from './star-rating-widget/star-rating-widget.component';
import { STOPWATCHComponent } from "./stopwatch/stopwatch.component";
import { TWOSTEPFORMComponent } from './two-step-form/two-step-form.component';

const COMPLEXITY_LEVEL_ONE = [
    BOOKMGMTComponent,
    DIETPLANComponent,
    FAQACCORDIONComponent,
    FEEDBACKFORMCOUNTERComponent,
    MovieWatchlistComponent,
    PARKINGMETERComponent,
    TABSNAVPILLSComponent,
    QUIZMAKERComponent,
    SINGLEANSWERQUIZComponent
];

const COMPLEXITY_LEVEL_TWO = [
    SORTABLETABLEComponent,
    CONTROLLEDUNCONTROLLEDTOGGLEComponent,
    CourseWaitlistCapacityComponent,
    APPOINTMENTPICKERComponent,
    PAGINATIONDEMOComponent,
    EXPENSETRACKComponent,
    STARRATINGWIDGETComponent,
    STOPWATCHComponent,
    TWOSTEPFORMComponent
];

@Component({
  selector: 'app-root',
  imports: [COMPLEXITY_LEVEL_TWO[8]],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    constructor() {console.log(`Level One Tasks: ${COMPLEXITY_LEVEL_ONE.length},\nLevel Two Tasks: ${COMPLEXITY_LEVEL_TWO.length}`)}
}
