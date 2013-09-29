$(document).ready(function() {

    $("#hiddendisplay").hide();
    $("#paintingdisplay").hide();
    $("#paintingtitle").hide();
    $("#paintingdescription").hide();

    $(".inner").click(function() {
        $("#paintingdisplay").slideDown("slow");
        $("#paintingtitle").slideDown("slow");
        $("#paintingdescription").slideDown("slow");
        //var imgid = $(this).attr("src");
        //var newimgid = imgid.substring(0, imgid.length - 9);
        //var imgdescription = $(this).attr('alt');
        //$("#paintingdisplay").html('<img src="'+newimgid+'big.jpg"/>');
        //$("#paintingdescription").html(imgdescription);

        var artworkID = $(this).attr('id');
        for (var i in allArtworks) { // walk through each element in the allArtworks array
            if (artworkID === (allArtworks[i]).getID()) { //checks if the ID value on an element matches the one we want
                $("#paintingdisplay").html('<img src="' + allArtworks[i].getBigImgSrc() + '" />');
                $("#paintingtitle").html(allArtworks[i].getTitle());
                $("#paintingdescription").html(allArtworks[i].getDescription());
                break;
            }
        }
        
        $('html, body').animate( 
        	{scrollTop: $("#paintingdisplay").offset().top}, 
            500
        );
    });

    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });

    var Artwork = function(id, imgSrcPrefix, artTitle, artDescription) {
        // private ?
        this.id = id;
        this.imgSrcPrefix = imgSrcPrefix;
        this.artTitle = artTitle;
        this.artDescription = artDescription;
        
        this.getID = function() {
            return this.id;
        };

        this.getTitle = function() {
            return this.artTitle;
        };

        this.getDescription = function() {
            return this.artDescription;
        };

        this.getBigImgSrc = function() {
            return "img/" + this.imgSrcPrefix + "_big.jpg";
        };
    };

    var allArtworks = [
        new Artwork("artwork1", "fearofflight", "Fear of Flight", "Acrylic on canvas, 2013"),
        new Artwork("artwork2", "riseup", "Rise Up", "Acrylic on canvas, 2013"),
        new Artwork("artwork3", "alice", "Alice", "Acrylic on canvas, 2013"),
        new Artwork("artwork4", "leaves", "Leaves", "Acrylic on canvas, 2013"),
        new Artwork("artwork5", "allthecowgirls", "All the Cowgirls", "Acrylic on canvas, 2013"),
        new Artwork("artwork6", "starrysea", "Starry Sea", "Acrylic on canvas, 2013"),
        new Artwork("artwork7", "warmth", "Warmth", "Acrylic on canvas, 2013"),
        new Artwork("artwork8", "grasses", "Grasses", "Acrylic on canvas, 2013"),
        new Artwork("artwork9", "relic", "Relic", "Acrylic on canvas, 2013"),
        new Artwork("artwork10", "kiana", "Kiana", "Acrylic on canvas, 2013"),
        new Artwork("artwork11", "feather", "Feather", "Acrylic on canvas, 2013"),
        new Artwork("artwork12", "peninsula", "Peninsula", "Acrylic on canvas, 2013"),
        new Artwork("artwork13", "intothewoods", "Into the Woods", "Acrylic on canvas, 2013"),
        new Artwork("artwork14", "avenueofthesaints", "Avenue of the Saints", "Acrylic on canvas, 2013"),
        new Artwork("artwork15", "nora", "Nora", "Acrylic on canvas, 2013"),
        new Artwork("artwork16", "branches", "Branches", "Acrylic on canvas, 2013"),
        new Artwork("artwork17", "kara", "Kara", "Acrylic on canvas, 2013"),
        new Artwork("artwork18", "nest", "Nest", "Acrylic on canvas, 2013"),
        new Artwork("artwork19", "petals", "Petals", "Acrylic on canvas, 2013"),
    ];

});