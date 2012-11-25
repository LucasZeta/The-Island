#pragma strict

var textHints : GUIText;

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		collider.gameObject.transform.position = Vector3(163, 35, 363);
		
		textHints.SendMessage('ShowHint', "Hmm... Apparently I cannot swim.");
	}
}