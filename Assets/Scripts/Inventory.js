#pragma strict

static private var charge : int = 0;
var collectSound : AudioClip;

static function getCharge() {
	return charge;
}

function Start () {

}

function Update () {

}

function CellPickup() {
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
}