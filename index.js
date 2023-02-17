const Notification = (props) => {
  const { textName } = props;
  return <p>{textName}</p>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="info">
      <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
      <Notification textName="Information Message" />
    </div>
    <div className="success">
      <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
      <Notification textName="Success Message" />
    </div>
    <div className="warning">
      <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
      <Notification textName="Warning Message" />
    </div>
    <div className="error">
      <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
      <Notification textName="Error Message" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
