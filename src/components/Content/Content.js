import React from "react";
import { useSelector } from "react-redux";
import "./Content.scss";

const Content = () => {
  const pageState = useSelector((state) => state.content.pageState);
  return (
    <div className="content__wrapper">
      <div className="content">
        {pageState === "dashboard" ? (
          <table className="articles__container">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Duration</th>
                <th>MC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="article__rows">
                <td className="article__title">
                  Design: A Survival Guide for Beginners
                </td>
                <td className="article__duedate--wrapper">
                  <div className="article__duedate article__duedate__green">
                    Due 14 March 2021
                  </div>
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
                  <div className="article__duedate article__duedate__red">
                    Due 14 March 2021
                  </div>
                </td>
                <td className="article__mc">mcoordinator001</td>
              </tr>
            </tbody>
          </table>
        ) : pageState === "users" ? (
          <div>Users</div>
        ) : (
          <div>404 Not Found</div>
        )}
      </div>
    </div>
  );
};

export default Content;
