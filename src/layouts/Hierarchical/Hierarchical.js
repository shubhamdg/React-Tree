import React from "react";
import Card from "../../components/Card";
import "./style.css";

function create_layout(data) {
  const child_companies = [];

  if (data.childCompany) {
    let child_comp;
    for (let i = 0; i < data.childCompany.length; i++) {
      child_comp = data.childCompany[i];
      if (child_comp.companyname) {
        child_comp = create_layout(child_comp);
      } else {
        continue;
      }
      child_companies.push(child_comp);
      child_comp = 0;
    }
  }

  if (child_companies.length > 0) {
    return (
      <li>
        <div>
          <Card props={{ companyname: data.companyname, badge: data.badge }} />
        </div>
        <ul>{child_companies}</ul>
      </li>
    );
  } else {
    return (
      <li>
        <div>
          <Card props={{ companyname: data.companyname, badge: data.badge }} />
        </div>
      </li>
    );
  }
}

const Hierarchical = ({ data }) => {
  const companies = create_layout(data);

  return (
    <div className="tree">
      <ul>{companies}</ul>
    </div>
  );
};

export default Hierarchical;
