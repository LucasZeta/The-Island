#pragma strict

var lockedSound : AudioClip;
var doorLight : Light;
var textHints : GUIText;

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		var door : Transform = transform.FindChild('door');
		var charge : int = Inventory.GetCharge();
		
		if(charge == 4) {
			door.SendMessage('CheckDoor');
			
			if(GameObject.Find('PowerGUI')) {
				Destroy(GameObject.Find('PowerGUI'));
				doorLight.color = Color.green;
			}
		}
		else {
			door.audio.PlayOneShot(lockedSound);
			
			if((charge > 0) && (charge < 4)) {
				textHints.SendMessage('ShowHint', "This door won't budge, guess it needs fully charging.\nMaybe more power cells will help.");
			}
			else {
				collider.gameObject.SendMessage('enableHUD');
				textHints.SendMessage('ShowHint', 'This door seems locked... maybe that generator needs power...');
			}
		}
	}
}