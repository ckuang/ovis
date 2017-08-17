var config = {
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            componentName: 'Partition Tree and N<sup>2</sup>',
            componentState: { label: 'A' }
        }, {
            type: 'column',
            content: [{
                type: 'component',
                componentName: 'Plot',
                componentState: { label: 'B' }
            }, {
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
};

var myLayout = new GoldenLayout(config);
myLayout.registerComponent('Partition Tree and N<sup>2</sup>', function (container, componentState) {
    http.get("components/partition_tree_n2.html", function (response) {
        container.getElement().html(response);
        ptn2.initializeTree();
    });
});

myLayout.registerComponent('Plot', function (container, componentState) {
    http.get("components/plot.html", function (response) {
        container.getElement().html(response);
        createPlot(container);
    });
});

myLayout.registerComponent('testComponent', function (container, componentState) {
    container.getElement().html('<h2>' + componentState.label + '</h2>');
});

myLayout.init();