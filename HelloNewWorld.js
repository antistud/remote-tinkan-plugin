// remoteComponent.js
(function () {
    window.remoteComponent = {
        render: function (containerId, content) {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div>${content}</div>`;
            }
        }
    };
})();