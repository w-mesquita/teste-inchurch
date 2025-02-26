import { Component, inject, OnInit } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from "@angular/material/dialog";
import { LucideAngularModule, X, CloudUpload, Trash } from "lucide-angular";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-modal-new-edit-event",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogActions,
    LucideAngularModule,
  ],
  templateUrl: "./modal-new-edit-event.component.html",
  styleUrl: "./modal-new-edit-event.component.scss",
})
export class ModalNewEditEventComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ModalNewEditEventComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  readonly X = X;
  readonly CloudUpload = CloudUpload;
  readonly Trash = Trash;
  dataEvent = this.data;

  imagePreview: string | null = null;
  imageBase64: string | ArrayBuffer | null = null;

  newEventForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    description: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    image: new FormControl<File | string | null>(null, Validators.required),
    active: new FormControl(false),
  });

  ngOnInit(): void {
    console.log("🔥 ~ dataEvent:", this.dataEvent);

    if (this.dataEvent) {
      this.newEventForm.patchValue({
        title: this.dataEvent.title || "",
        description: this.dataEvent.content || "",
        image: this.dataEvent.image || null,
        active: this.dataEvent.active || false,
      });

      if (this.dataEvent.image && typeof this.dataEvent.image === "string") {
        this.imagePreview = this.dataEvent.image;
      }
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.newEventForm.patchValue({ image: file });
      this.newEventForm.get("image")?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        console.log("Imagem transformada em Base64:", this.imagePreview);
      };
      reader.readAsDataURL(file);
    } else {
      this.newEventForm.get("image")?.setErrors({ required: true });
    }
  }

  checkImageSelection() {
    const imageControl = this.newEventForm.get("image");
    if (imageControl?.value === null && imageControl?.touched) {
      imageControl.setErrors({ required: true });
    }
  }

  markImageAsTouched() {
    this.newEventForm.get("image")?.markAsTouched();
  }

  handleSave() {
    if (this.newEventForm.valid) {
      if (this.dataEvent) {
        const updatedEvent = { ...this.dataEvent };
        updatedEvent.title = this.newEventForm.get("title")?.value;
        updatedEvent.description = this.newEventForm.get("description")?.value;
        updatedEvent.image = this.imagePreview;
        updatedEvent.active = this.newEventForm.get("active")?.value;

        this.dialogRef.close(updatedEvent);
      }else{
        const formData = this.newEventForm.value;
        formData.image = this.imagePreview;
        this.dialogRef.close(formData);
      }
    }
  }

  removeImage() {
    this.markImageAsTouched();
    this.imagePreview = null;
    this.newEventForm.patchValue({ image: null });
    this.newEventForm.get("image")?.updateValueAndValidity();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
