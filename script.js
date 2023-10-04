function submitData() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];
    var video = document.getElementById('video').files[0];

    var dataElement = document.getElementById('dataElement');

    var newData = "<div class='card'>" +
      "<div class='card-header'>" +
      "<h3 class='card-title'><b>Title:</b>" + title + "</h3>" +
      "</div>" +
      "<div class='card-body'>" +
      "<p><b>Content: </b>" + content + "</p>";

    if (image) {
      var imgPreview = document.createElement('img');
      imgPreview.src = URL.createObjectURL(image);
      imgPreview.style.maxWidth = '100%';
      imgPreview.style.height = 'auto';
      imgPreview.style.marginTop = '10px';
      newData += "<p><b>Image:</b></p>";
      newData += "<div class='card-body-image'>" +
        "<img class='preview' src='" + imgPreview.src + "' alt='Selected Image'>" +
        "</div>";
    }
    
    if (video) {
      var vidPreview = document.createElement('video');
      vidPreview.src = URL.createObjectURL(video);
      vidPreview.controls = true;
      vidPreview.autoplay = true;
      vidPreview.style.maxWidth = '100%';
      vidPreview.style.height = 'auto';
      vidPreview.style.marginTop = '20px';
      newData += "<p><b>Video:</b></p>";
      newData += "<div class='card-body-video'>" +
        "<video class='video-preview' src='" + vidPreview.src + "' controls autoplay></video>" +
        "</div>";
    }

    newData += "</div></div>";

    dataElement.innerHTML += newData;

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
  }