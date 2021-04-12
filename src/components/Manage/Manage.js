import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./Manage.scss";

export default class Manage extends Component {
  render() {
    return (
      <div className="manage">
        <div className="manage__title">
          <FontAwesomeIcon icon={faEdit} />
          Submit Articles
        </div>
        <div className="articles__container">
          <div className="article__wrapper">
            <div className="article__title-posted">
              <div className="article__title">
                Design: A Survival Guide for Beginners
              </div>
              <div className="article__posted">Posted 3 days ago</div>
            </div>
            <div className="article__duedate article__duedate__green">
              Due 14 March 2021
            </div>
            <div className="article__views">
              <div className="article__views-number">00</div>Views
            </div>
            <div className="article__action">
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>
          <div className="article__wrapper">
            <div className="article__title-posted">
              <div className="article__title">
                Design: A Survival Guide for Beginners
              </div>
              <div className="article__posted">Posted 3 days ago</div>
            </div>
            <div className="article__duedate">Due 14 March 2021</div>
            <div className="article__views">
              <div className="article__views-number">00</div>Views
            </div>
            <div className="article__action">
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>{" "}
          <div className="article__wrapper">
            <div className="article__title-posted">
              <div className="article__title">
                Design: A Survival Guide for Beginners
              </div>
              <div className=" article__posted">Posted 3 days ago</div>
            </div>
            <div className="article__duedate article__duedate__red">
              Due 14 March 2021
            </div>
            <div className="article__views">
              <div className="article__views-number">00</div>Views
            </div>
            <div className="article__action">
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
