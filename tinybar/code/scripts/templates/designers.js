
<script id="designerListTemplate" type="text/template">
{{#designer}}
<div id="designer" class="one-half-responsive">
    <p class="thumb-left no-bottom">
        <img src="images/pictures/1s.jpg" alt="img">
        <strong>{{designer.name}}</strong>
        <em><br>{{designer.origin}}</em>
    </p>
    <div class="thumb-clear"></div>
</div>
<div class="decoration hide-if-responsive"></div>
{{/designer}}
</script>