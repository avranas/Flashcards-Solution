import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicSlice";
import { useSelector } from "react-redux";
import { selectTopic } from "../features/topics/topicSlice";

export default function NewTopicForm() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const topics = useSelector(selectTopic);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    //Do nothing if the name has been used before
    const topicValues = Object.values(topics);
    if (topicValues.find( i => i.name === name )) {
      return;
    }
    
    const payload = {
      name: name,
      id: uuidv4(),
      icon: icon
    }
    // dispatch your add topic action here
    dispatch({
      type: 'topics/addTopic', 
      payload: payload
    });
    history.push(ROUTES.topicsRoute());
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center">Add Topic</button>
      </form>
    </section>
  );
}
