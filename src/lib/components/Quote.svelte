<script>
	let showButton = false;
	function onHover() {
		showButton = true;
	}
	function onBlur() {
		showButton = false;
	}
</script>

<blockquote on:mouseenter={onHover} on:mouseleave={onBlur}>
	{#if showButton}
		<div class="tweet-quote">
			<a
				href="https://twitter.com/share"
				data-text=""
				class="share-btn"
				data-via="doodlemarks"
				data-size="large"
				data-count="vertical"
			>
				Tweet</a
			>
		</div>
	{/if}
	<p>
		<slot />
	</p>
</blockquote>

<style>
	.share-btn {
		z-index: 10;
		position: absolute;
		top: 30%;
		left: 40%;
		margin: 0 5px;
		padding: 8px 16px;
		border-radius: 3px;
		color: #fff;
		font-size: 14px;
		line-height: 18px;
		vertical-align: middle;
		transition: background 0.2s ease-in-out;
		display: inline-block;
		font-size: 18px;
		background-color: #00aced;
	}
	.share-btn:hover {
		background-color: #0087ba;
	}
	blockquote {
		height: 100px;
		border-left: 3px #999 solid;
		position: relative;
		margin: 80px auto;
		width: 400px;
		font-size: 48px;
		line-height: 56px;
		padding-left: 40px;
		display: flex;
		align-items: center;
	}

	blockquote span {
		display: block;
		text-align: right;
		font-size: 24px;
		line-height: 40px;
		margin-top: 10px;
		text-transform: uppercase;
	}

	blockquote:hover p {
		opacity: 0.5;
		transition: opacity 0.2s ease;
	}
</style>
