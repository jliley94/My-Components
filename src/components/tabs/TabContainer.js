import React, { useState } from 'react';
import "./TabStyles.scss";

export default function TabsContainer(props) {
  const [activeTab, setActiveTab] = useState(props.default);

  return (
      props.children.length > 0 ?
        <div className="tabs-container">
            <div className="tabs-headers">
                {props.children.map((tab, i) => (
                <div
                    key={i}
                    className={`tab-header ${activeTab === i ? "active" : "inactive"}`}
                    onClick={() => setActiveTab(i)}
                >
                    {tab.props.title}
                </div>
                ))}
            </div>
            {props.children[activeTab]}
        </div>
        :
        <div>No tabs found to display..</div>
  );
}
