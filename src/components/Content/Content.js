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
          <div className="users__container">
            <button className="users__button">Edit</button>
            <table className="users__table">
              <tbody>
                <tr>
                  <td className="users__labels">Username</td>
                  <td className="users__center-align">student001</td>
                </tr>
                <tr>
                  <td className="users__labels">Email</td>
                  <td className="users__center-align">student001@gmail.com</td>
                </tr>
                <tr>
                  <td className="users__labels">Password</td>
                  <td className="users__center-align">**********</td>
                </tr>
                <tr>
                  <td className="users__labels">Role</td>
                  <td className="users__center-align">
                    <div className="users__blue-round-boxes">Student</div>
                  </td>
                </tr>
                <tr>
                  <td className="users__labels">Faculty</td>
                  <td className="users__center-align">
                    <div className="users__blue-round-boxes">IT</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>404 Not Found</div>
        )}
      </div>
    </div>
  );
};

export default Content;
