// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../components/cards/Card"

const MyPost = () => {
  return (
    <div className="container">
        <form>
        <h2 className="mt-5">Add New Post</h2>
      <div className="mb-3 mt-3">
        <label className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control mt-3"
          id="title"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3 mt-3">
        <label className="form-label mt-3">
          Content
        </label>
        <textarea
          className="form-control mt-3"
          id="content"
          rows="3"
          name="content"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
        </form>

      <h3 className="mt-5">My Post</h3>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPost