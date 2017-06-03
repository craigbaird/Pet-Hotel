$(function(){
  console.log("Team Awesome Sourced");
  //populates owners
  getOwners();

//function to populate owners in input field
  function getOwners (){
    //insert get function for getting pets and posting them to the DOM
    console.log("Get owners Function");
    $.ajax({
      type: 'GET',
      url: '/owners',
      success: function(response){
        console.log('back from pet database with: ', response);
        //display inventory to DOM
        displayOwners(response);
      } //end success function
    }); // end ajax function
  } //end getOwners

  //function to display owners
  var displayOwners = function (owners){
    for (var i = 0; i < owners.length; i++) {
      console.log(owners[i]);
    }
  };

  //get route for pets
  var getPets = function (){
    //insert get function for getting pets and posting them to the DOM
    console.log("Get pets Function");
    $.ajax({
      type: 'GET',
      url: '/pets',
      success: function(response){
        console.log('back from pet database with: ', response);
        //display inventory to DOM
        displayPets(response);
      } //end success function
    }); // end ajax function
  }; //end getPets

  //function to display Pets in the DOM
  var displayPets = function (pets){
    console.log("in displayPets path");
    for (var i = 0; i < pets.length; i++) {
      $('#pets').append('<tr>');
      var $el = $('#pets').children().last();
      $el.append('<td>' + pets[i].first_name + '</td>');
      $el.append('<td>' + pets[i].last_name + '</td>');
      $el.append('<td><button id=checkIn>Check In</button>');
      $el.append('<td><button id=checkOut>Check Out</button>');
      // $el.append('<td>' + pets.name + '</td>');
      // $el.append('<td>' + pets.breed + '</td>');
      // $el.append('<td>' + pets.color + '</td>');
      // $el.append('<td>' + pets.type + '</td>');
    }// end for loop
  }; // end displayPets

  //function to check in pets
    $('#checkIn').on("click", function (){
      console.log("check in button clicked");
      var checkInDate = new Date();
      $.ajax({
        type: "POST",
        url: "/pets/checkIn",
        data: {id:pet.id, date:checkInDate},
        success: function (response){
          console.log("check in received");
          getPets();
        }
      });// end ajax
    }); //end request for checking in pets

  // and check out
  //function to check out pets
  var checkOutPets = function (){
    //request for checking Out pets
    var checkOutDate = new Date();
    $.ajax({
      type: "PUT",
      url: "/pets/checkOut",
      data: "",
      success: function (response){
        getPets();
      }
    });// end ajax
  };// end checkOutPets

  //function to updatePets
  var updatePets = function (){
    //PUT request for updating pets
    $.ajax({
      type: "PUT",
      url: "/pets/change",
      data: "",
      success: function (response){
        getPets();
      }
    });// end ajax
  }; //end updatePets

  //function to remove pets
  //DELETE request for deleting pets
  $('#books').on('click', '.delete', function(){
    console.log('Delete pet' + $(this).data('pet'));
    var petId = $(this).data('pet');
    $.ajax({
      type: "DELETE",
      url: "/pets/delete/" + petId + "/",
      success: function (){
        console.log("in delete pets path");
        getPets();
      }
    });//end ajax
  }); //end removePet

  //function to create pets
  var createPet = function (){
    //POST request for adding pets to the DB
    $.ajax({
      type: 'POST',
      url: '/pets/create',
      data: objectToSend,
      success: function (response){
        if (response === 'OK'){
          //update display
          getPets();
        } else {
          alert ('error adding item');
        }
      }
    });
  }; // end createPet

    //function to create owner
    //POST request for adding owners to the DB
    $(".OwnRegBtn").on("click", function(){

      console.log("register button clicked");
      console.log($(".OwnRegFirstName").val());
      $.ajax({
        type: 'POST',
        url: '/owners/create',
        data: {ownerFirst: $(".OwnRegFirstName").val(), ownerLast: $(".OwnRegLastName").val()},
        success: function (response){
          if (response === 'OK'){
            //update display
            getOwners();
          } else {
            alert ('error adding item');
          }
        }
      });// end ajax
    }); //end button click
});//end doc ready
