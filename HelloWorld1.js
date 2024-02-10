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
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div>${props.item.name}</div>`;
            }
        }
    };
})();