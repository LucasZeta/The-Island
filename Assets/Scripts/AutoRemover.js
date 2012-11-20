#pragma strict

var removeTime : float = 3.0f;

function Start () {
	Destroy(gameObject, removeTime);
}