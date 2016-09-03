#pragma strict
private var animator : Animator;
private var extents : Vector3;

function Start () {
  animator = GetComponent(Animator);
  extents = GetComponent(Renderer).bounds.extents;
}

function Update () {
  var input = new Vector2(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));
  var hit : RaycastHit2D = Physics2D.Raycast(transform.position, input);
  print(hit.distance);
  if (!hit || hit.distance > extents.x) {
    transform.position += input / 10;
    animator.SetFloat("X", input.x);
    animator.SetFloat("Y", input.y);
    if (input != Vector2.zero)
      animator.SetBool("walk", true);
    else
      animator.SetBool("walk", false);
  } else {
    animator.SetFloat("X", 0);
    animator.SetFloat("Y", 0);
    animator.SetBool("walk", false);
  }
}
