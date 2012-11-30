#pragma strict

var matchGUI : GUITexture;

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		collider.gameObject.SendMessage('MatchboxPickup');
		
		matchGUI.enabled = true;
		Destroy(gameObject);
	}
}