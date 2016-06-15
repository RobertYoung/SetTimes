import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'save-buttons',
  templateUrl: 'build/components/save-buttons/save-buttons.component.html'
})
export class SaveButtonsComponent implements OnInit {
  @Output() previewButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() submitButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteButton: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  previewButtonPressed() {
    this.previewButton.next(null);
  }

  saveButtonPressed() {
    this.saveButton.next(null);
  }

  submitButtonPressed() {
    this.submitButton.next(null);
  }

  deleteButtonPressed() {
    this.deleteButton.next(null);
  }
}
