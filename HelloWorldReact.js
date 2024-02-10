(function () {
    // Assuming React and ReactDOM are globally available
    var React = window.React;
    var ReactDOM = window.ReactDOM;

    window.remoteComponent = {
        render: function (containerId, content) {
            // Define your React component
            const MyComponent = () => (
                <div>{content}</div>
            );

            // Find the container
            const container = document.getElementById(containerId);

            // Render the React component into the container
            if (container) {
                ReactDOM.render(<MyComponent />, container);
            }
        }
    };
})();