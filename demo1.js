// Ext.application({
// 	name: "helloExt",
// 	launch: function(){
// 		Ext.create('Ext.container.Viewport', {
// 			layout: 'fit',
// 			items: [{
// 				title: 'hello Ext',
// 				html: 'Hello ! Welcome to Ext js'
// 			}]
// 		})
// 	}
// })
Ext.onReady(function(){
	Ext.MessageBox.alert('title', 'hello world!');
})