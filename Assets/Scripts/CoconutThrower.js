#pragma strict

static var canThrow : boolean = false;

var projectile : Rigidbody;
var throwSound : AudioClip;
var throwSpeed : float = 30.0f;

function Update () {
	if(Input.GetButtonDown('Fire1') && canThrow) {
		audio.PlayOneShot(throwSound);
		
		var newProjectile : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
		newProjectile.name = 'coconut';
		newProjectile.velocity = transform.forward * throwSpeed;
	}
}

@script RequireComponent(AudioSource)