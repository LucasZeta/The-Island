#pragma strict

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		collider.gameObject.SendMessage('MatchboxPickup');
		
		Destroy(gameObject);
	}
}