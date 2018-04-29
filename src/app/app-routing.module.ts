import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './selective-strategy.service';

import { HomeComponent } from './home/home.component';
import { StudentsComponent} from './students/students.component';
import { StudentComponent} from './students/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: HomeComponent },
            { path: 'students', component: StudentsComponent },
            { path: 'student/:id/edit', component: StudentComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ], { preloadingStrategy: SelectiveStrategy }) // , { enableTracing: true })
    ],
    providers: [ SelectiveStrategy ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }