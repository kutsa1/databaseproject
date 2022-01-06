import {Component, OnInit} from '@angular/core';
import {ThesisDetailModal} from "../../models/thesisDetailModal";
import {ThesisService} from "../../services/thesis.service";
import {DeleteDialogComponent} from "../dialogs/delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DetailDialogComponent} from "../dialogs/detail-dialog/detail-dialog.component";

@Component({
  selector: 'app-thesis-list',
  templateUrl: './thesis-list.component.html',
  styleUrls: ['./thesis-list.component.css']
})
export class ThesisListComponent implements OnInit {

  thesisList: ThesisDetailModal[] = [];
  filterText: string;

  constructor(private thesisService: ThesisService, public dialog: MatDialog,
              private router: Router
  ) {
  }

  deleteDialog(thesis: ThesisDetailModal): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {title: thesis.title, id: thesis.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllThesisDetail();
    });
  }


  ngOnInit():
    void {
    this.getAllThesisDetail()
  }

  getAllThesisDetail() {
    this.thesisService.getAllThesisDetail().subscribe(response => {
      this.thesisList = response.data;
      console.log(response.data)
    })
  }


  editDialog(id: number) {
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllThesisDetail();
    });
  }
}


