const { uploadVideo } = require('../../services/upload');

exports.videoUpload = (req, res) => {
    uploadVideo(req, res, function(err) {
        if (err) {
            console.log(err);
            res.json({ status: 401, msg: err.message });
        } else {
            const image = getImagePath(req.file.filename);
            res.json({ status: 200, msg: 'Image uploaded sucess.', data: image });
        }
    });
}

//router.post('/video-upload',uploadController.videoUpload);