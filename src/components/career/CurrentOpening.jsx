import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import firebase from "../../firebaseConfig";
import "./career.css";
import OpeningBanner from "./OpeningBanner";

export default function CurrentOpening() {
  const [datatable, setDatatable] = React.useState({});

  useEffect(() => {
    const columns = [
      {
        label: "Job Position/Title",
        field: "title",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Location",
        field: "location",
        width: 270,
      },
      {
        label: "Country",
        field: "country",
        width: 200,
      },
      {
        label: "Job Type",
        field: "jobType",
        sort: "asc",
        width: 100,
      },
      {
        label: "Description/Apply",
        field: "jobLink",
        sort: "disabled",
        width: 150,
      },
    ];
    firebase
      .app("main")
      .firestore()
      .collection("Jobs")
      .get()
      .then((dd) => {
        const rows = [];
        dd.forEach((d) => {
          const goes = {
            title: `${d.data().title}`,
            location: `${d.data().location}`,
            country: `${d.data().country}`,
            jobType: `${d.data().jobType}`,
            jobLink: (
              <a
                rel="noopener noreferrer"
                href={d.data().jobLink}
                target="_blank"
              >
                <button className="btn-ques">
                  {/* <FaDownload /> */} Apply
                </button>
              </a>
            ),
          };
          rows.push(goes);
        });

        setDatatable({ columns, rows });
      });
  }, []);

  return (
    <div>
      <OpeningBanner/>
    
    <div className="container pt-3">

      <MDBDataTableV5
        searchPlaceholder="Search Question Papers"
        hover
        entriesOptions={[10, 20, 50]}
        entries={10}
        pagesAmount={5}
        data={datatable}
        pagingDown
        searchTop
        searchBottom={false}
        className="font1"
        materialSearch
      />
    </div>
    </div>
  );
}
