
function getPlanter(val) {
    var path = "planters/";

    switch (val) {
        case "SqPlanter": path += "Sq_RectPlanter.html";
            break;
        case "FlatCylinder": path += "FlatBottomCylinder.html";
            break;
        case "HalfSpherical": path += "HalfSphere.html";
            break;
        case "TruncatedCone": path += "TrunCone.html";
            break;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("results").innerHTML = "";
            document.getElementById("contents").innerHTML = this.responseText;
        }
    };

    xhr.send();
}

function setOutput() {
    document.getElementById("results").innerHTML = "<hr><h2>Order Details: </h2>" +
        document.getElementById("Name").value + "<br>" +
        document.getElementById("address").value + "<br>" +
        document.getElementById("postCode").value + "<br><br>";

    if (document.getElementById("SqPlanter").checked) {
        var l = document.getElementById("length").value;
        var w = document.getElementById("width").value;
        var h = document.getElementById("height").value;
        var costPerCube = 0.001;
        var vol = l * w * h;

        document.getElementById("results").innerHTML += "<b>Square/Rectangular</b><br>" +
            "length: " + l + " cm<br>" +
            "width: " + w + " cm<br>" +
            "height: " + h + " cm<br>" +
            "volume: " + vol + " cm<sup>3</sup><br><br>" +
            "<b>Total:</b> $" + (vol*costPerCube).toFixed(2);

    }
    else if (document.getElementById("FlatCylinder").checked) {
        var r = document.getElementById("radius").value;
        var h = document.getElementById("height").value;
        var costPerCube = 0.0012;
        var vol = Math.PI * r * r * h;

        document.getElementById("results").innerHTML += "<b>Flat Cylinder</b><br>" +
            "radius: " + r + " cm<br>" +
            "height: " + h + " cm<br>" +
            "volume: " + vol + " cm<sup>3</sup><br><br>" +
            "<b>Total:</b> $" + (vol*costPerCube).toFixed(2);

    }
    else if (document.getElementById("HalfSpherical").checked) {
        var r = document.getElementById("radius").value;
        var costPerCube = 0.0015;
        var vol = (1/2)*((4/3)*Math.PI*r*r*r);

        document.getElementById("results").innerHTML += "<b>Half Spherical</b><br>" +
            "radius: " + r + " cm<br>" +
            "volume: " + vol + " cm<sup>3</sup><br><br>" +
            "<b>Total:</b> $" + (vol*costPerCube).toFixed(2);

    }
    else if (document.getElementById("TruncatedCone").checked) {
        var r1 = document.getElementById("radius1").value;
        var r2 = document.getElementById("radius2").value;
        var h = document.getElementById("height").value;
        var costPerCube = 0.002;
        var vol = (1/3)*Math.PI*(r1*r1 + r1*r2 + r2*r2)*h;

        document.getElementById("results").innerHTML += "<b>Truncated Cone</b><br>" +
            "top radius: " + r1 + " cm<br>" +
            "bottom radius: " + r2 + " cm<br>" +
            "height: " + h + " cm<br>" +
            "volume: " + vol + " cm<sup>3</sup><br><br>" +
            "<b>Total:</b> $" + (vol*costPerCube).toFixed(2);

    }
}