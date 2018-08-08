var db = require('../models');

module.exports = function (app) {
    // Find all projects and return them to the user with res.json
    app.get('/api/projects', function (req, res) {
        db.Project.findAll({}).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    app.get('/api/projects/:id', function (req, res) {
        // Find one project with the id in req.params.id and return them to the user with res.json
        db.Project.findOne({
            where: {
                project_id: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    app.post('/api/projects', function (req, res) {
        // Create a project with the data available to us in req.body
        db.Project.create(req.body).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    // PUT route for updating projects
    app.put('/api/projects', function (req, res) {
        db.Project.update(
            req.body, {
                where: {
                    project_id: req.body.id
                }
            }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    // TODO: do we need to do a cascading delete here?
    app.delete('/api/projects/:id', function (req, res) {
        // DELETE the project with the id available to us in req.params.id
        db.Project.destroy({
            where: {
                project_id: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

};