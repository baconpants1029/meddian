﻿package  {		import flash.display.MovieClip;			public class GlobalVariables extends MovieClip {				public var position : Vector2 = new Vector2( 0, 0);		public var health : Number;		public var attack : Number;		public var fightingEnemy : Boolean = false;				public var enemyHealth : Number = 0;		public var enemyAttack : Number = 15;		public var enemyAttackSpeed : Number = 2;		public var enemyAttackChance : Number = 25;		public var enemyAttackDuration : Number = 0;		public var enemyAttackSprite : Number;				public function GlobalVariables() {			// constructor code		}	}	}