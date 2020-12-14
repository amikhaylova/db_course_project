import Notifications from "react-notification-system-redux";


export function send_notification(notification_text) {
    console.log('In send_not');
    return (dispatch) => {
        dispatch(Notifications.error(create_notification(notification_text)));
    }
}

function create_notification(notification_text) {
    const object = {};
    object.title = 'Возникла проблема';
    object.message = notification_text;
    object.position = 'tr';
    object.autoDismiss = 3;
    return object;
}