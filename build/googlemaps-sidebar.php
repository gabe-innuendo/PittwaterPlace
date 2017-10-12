<!-- Sidebar -->
<div class="cell cell--oneThird">
    <aside class="google-maps-sidebar">
        <div id="map"></div>
        <form class="google-maps-direction-form">
            <label for="origin-input">Get directions from:</label><br />
            <input id="origin-input" class="controls" type="text">
        
            <div id="mode-selector" class="controls">
                <div class="input-wrapper">
                  <input type="radio" name="type" id="changemode-walking" checked="checked">
                  <label for="changemode-walking">Walking</label>
                </div>
                <div class="input-wrapper">
                  <input type="radio" name="type" id="changemode-transit">
                  <label for="changemode-transit">Public transport</label>
                </div>
                <div class="input-wrapper">
                  <input type="radio" name="type" id="changemode-driving">
                  <label for="changemode-driving">Driving</label>
                </div>
            </div>
        </form>
        <div id="directionsPanel"></div>
    </aside>
</div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVahm6Dzg99t79AXctCbs-0t1k91XXGxI&libraries=places&callback=initMap" async defer></script>
        <script src="js/googlemaps.js"></script>