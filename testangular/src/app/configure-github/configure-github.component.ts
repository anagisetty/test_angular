import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-configure-github',
    templateUrl: './configure-github.component.html',
    styleUrls: ['./configure-github.component.scss']
})
export class ConfigureGithubComponent implements OnInit {
    configureGithubForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.configureGithubForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            url: ['', Validators.required],
            repoName: ['', Validators.required]
        });
    }

    onSubmitConfigureGithub() {
        if (this.configureGithubForm.valid) {
            console.log(this.configureGithubForm.value);
        }
    }

}