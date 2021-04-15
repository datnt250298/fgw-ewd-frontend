import React from "react";
import "./Content.scss";

const Content = () => {
  return (
    <div className="content__wrapper">
      <div className="content">
        <table className="articles__container">
          <thead>
            <th>Topic</th>
            <th>Duration</th>
            <th>MC</th>
          </thead>
          <tbody>
            <tr className="article__rows">
              <td className="article__title">
                Design: A Survival Guide for Beginners
              </td>
              <td className="article__duedate--wrapper">
                <div className="article__duedate article__duedate__green">Due 14 March 2021</div>
              </td>
              <td className="article__mc">mcoordinator001</td>
            </tr>
            <tr className="article__rows">
              <td className="article__title">
                Design: A Survival Guide for Beginners
              </td>
              <td className="article__duedate--wrapper">
                <div className="article__duedate">Due 14 March 2021</div>
              </td>
              <td className="article__mc">mcoordinator001</td>
            </tr>
            <tr className="article__rows">
              <td className="article__title">
                Design: A Survival Guide for Beginners
              </td>
              <td className="article__duedate--wrapper">
                <div className="article__duedate article__duedate__red">Due 14 March 2021</div>
              </td>
              <td className="article__mc">mcoordinator001</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
