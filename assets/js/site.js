(function(){

    var mapOptions = {
        center: new google.maps.LatLng(38, -85.7),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $(function(){
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        fetchKYCoalPlants(function(data) {
          plotMarkers(map, data);
        });
    });

    function fetchKYCoalPlants(success) {
        var data = [
            { "lat": 38.177389, lon: -82.624778, title: 'Big Sandy Plant' },
            { "lat": 38.175833, lon: -85.879444, title: 'Cane Run Station' },
            { "lat": 37.9625, lon: -86.791667, title: 'Coleman Station' },
            { "lat": 36.998056, lon: -84.592778, title: 'Cooper Power Station' },
            { "lat": 37.880556, lon: -84.262222, title: 'Dale Power Station' },
            { "lat": 37.787778, lon: -84.713056, title: 'E.W. Brown Generating Station' },
            { "lat": 38.905556, lon: -84.851667, title: 'East Bend Generating Station' },
            { "lat": 37.794167, lon: -87.060833, title: 'Elmer Smith Station' },
            { "lat": 38.748778, lon: -85.034222, title: 'Ghent Generating Station' },
            { "lat": 37.363056, lon: -87.121389, title: 'Green River Generating Station' },
            { "lat": 37.645833, lon: -87.503056, title: 'Green Station' },
            { "lat": 37.646833, lon: -87.501056, title: 'Henderson Station' },
            { "lat": 37.845, lon: -87.591311, title: 'Henderson Station I (KY)' },
            { "lat": 38.052778, lon: -85.910833, title: 'Mill Creek Station' },
            { "lat": 37.259722, lon: -86.978056, title: 'Paradise Fossil Plant' },
            { "lat": 37.645833, lon: -87.503056, title: 'Robert Reid Power Plant' },
            { "lat": 37.151667, lon: -88.777222, title: 'Shawnee Fossil Plant' },
            { "lat": 38.699167, lon: -83.816667, title: 'Spurlock Power Station' },
            { "lat": 38.584722, lon: -85.411944, title: 'Trimble County Generating Station' },
            { "lat": 38.0471, lon: -84.848133, title: 'Tyrone Generating Station' },
            { "lat": 37.452167, lon: -87.081667, title: 'Wilson Station' }
        ];

        if (typeof success === 'function') {
            success(data);
        }
    }

    function plotMarkers(map, data) {
        for (var i = 0; i < data.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].lat, data[i].lon),
                map: map,
                title: data[i].title
            });
        }
    }
})();