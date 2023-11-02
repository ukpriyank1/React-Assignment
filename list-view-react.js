import React from "react";

let Body = (props) => {
  let data = [
    {
      name: "Raja",
      surname: "Babu",
      city: "Surat",
    },
    {
      name: "Mahesh",
      surname: "Babu",
      city: "Vadodadara",
    },
    {
      name: "Vijay",
      surname: "Thalapathy",
      city: "Ahmedabad",
    },
    {
      name: "Allu",
      surname: "Arjun",
      city: "Rajkot",
    },
    {
      name: "Ram",
      surname: "Charan",
      city: "Bhavnagar",
    },
  ];

  return (
    <div>
      {data.map((element) => {
        return (
          <>
            <div>
              <div className="parent">
                <span>
                  <i class="fa-solid fa-check" />
                </span>
                <span className="ele">
                  {element.name} {element.surname} is live in {element.city}{" "}
                  city.
                </span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Body;
