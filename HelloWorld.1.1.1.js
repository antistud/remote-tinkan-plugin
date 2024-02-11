// remoteComponent.js
//  props: {
//     item: {
//     "createdBy": "64ee4e689bafa48862cd",
//     "typeId": "plugin",
//     "pageId": null,
//     "linkId": null,
//     "imageId": null,
//     "emoji": "none",
//     "groupId": "65c5959094909f549dea",
//     "body": null,
//     "parentId": null,
//     "actionAt": null,
//     "actionTaken": null,
//     "audioId": null,
//     "orderId": null,
//     "captions": [],
//     "lat": null,
//     "lng": null,
//     "name": "Welcome to the group",
//     "$id": "65c595d7a96b27c7f28c",
//     "$createdAt": "2024-02-09T03:02:47.695+00:00",
//     "$updatedAt": "2024-02-10T05:23:14.359+00:00",
//     "$permissions": [
//         "read(\"any\")",
//         "update(\"user:64ee4e689bafa48862cd\")",
//         "delete(\"user:64ee4e689bafa48862cd\")"
//     ],
//     "$databaseId": "64ee518077284dfcd44b",
//     "$collectionId": "blocks"
//    }
//  }

(function () {
    window.remoteComponent = {
        render: function (containerId, props) {

            function Block(props) {
                return (
                    <div onclick="tinkan.close()">
                        <h1>Hello, {props.name}</h1>

                    </div>
                );
            }

            function Page(props) {
                return (
                    <div>
                        <h1>Hello, {props.name} Page</h1>
                    </div>
                );
            }

            function Edit(props) {
                return (
                    <div>
                        <h1>Hello, {props.name} Edit</h1>
                    </div>
                );
            }

            function Create(props) {
                return (
                    <div>
                        <h1>Hello, {props.name} Create</h1>
                    </div>
                );
            }






            const container = document.getElementById(containerId);
            if (container) {
                if (props && props.type == "block") {
                    container.innerHTML = Block(props);
                } else if (props && props.type == "page") {
                    container.innerHTML = Page(props);
                } else if (props && props.type == "edit") {
                    container.innerHTML = Edit(props);
                } else if (props && props.type == "create") {
                    container.innerHTML = Create(props);
                }
            }
        }
    };
})();



