<form action="/rsvp" method="post" id="rsvp-form">
	<p>Are you able to attend?</p>
	<div id="choices" class="group">
		<div>
			<label><input type="radio" value="glad" name="status">&nbsp;Gladly Attend</label><br />
			<label><input type="radio" value="resent" name="status">&nbsp;Resentfully Attend</label><br />
			<label><input type="radio" value="nobutyes" name="status">&nbsp;Will Decline to Respond but Ultimately Attend</label><br />
		</div>
		<div>
			<label><input type="radio" value="regret" name="status">&nbsp;Regretfully Decline</label><br />
			<label><input type="radio" value="decline" name="status">&nbsp;Enthusiastically Decline</label><br />
			<label><input type="radio" value="who" name="status">&nbsp;Wait, who are you again?</label><br />
		</div>
	</div>
	<p>
		<label>
			What's your name?<br />
			<input type="text" name="name">
		</label>
	</p>
	<p>
		<label>
			Any songs you would like to hear? (No promises, and <a href="https://www.youtube.com/watch?v=RD1KqbDdmuE">no Stairway to Heaven</a>.)<br />
			<textarea name="songs"></textarea>
		</label>
	</p>
	<p>
		<label>
			Please list anyone else coming<br />
			<textarea name="partylist"></textarea>
		</label>
	</p>
	<p>
		<label>
			Appetizers will be served, but if you have specific dietary needs, please let us know:<br />
			<textarea name="diet"></textarea>
		</label>
	</p>
	<p>
		<button type="submit">Submit</button>
	</p>
</form>