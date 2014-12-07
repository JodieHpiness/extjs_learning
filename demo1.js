/* 页面添加内容 */

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

/* 提示框 */

// Ext.onReady(function(){
// 	Ext.MessageBox.alert('title', 'hello world!');
// })

/* 提示框 */

// Ext.application({
// 	name: "helloExt",
// 	launch: function(){
// 		Ext.MessageBox.alert('title', 'hello hello hello ...');
// 	}
// })

/* 弹出窗口 */

// Ext.onReady(function(){
// 	var win = new Ext.Window({
// 		title: "new window",
// 		width: 470,
// 		height: 350,
// 		html: '<div>this is the content of window</div><button>AAA</button>',
// 		resizable: true,
// 		modal: true,
// 		closable: true,
// 		maximizable: true,
// 		minimizable: true,
// 		bodyStyle: "padding: 10px"
// 	});
// 	win.show();
// });

/* 弹出表单 */


// Ext.onReady(function(){
// 	var form = new Ext.form.FormPanel({
// 		frame: true,
// 		title: '表单标题',
// 		style: 'margin: 10px',
// 		html: '<div style="padding: 10px">这里是表单内容</div>'
// 	});

// 	var win = new Ext.Window({
// 		title: '窗口',
// 		width: 470,
// 		height: 374,
// 		html: '<div>这里是窗体内容</div>',
// 		resizable: true,
// 		modal: true,
// 		closable: true,
// 		maximizable: true,
// 		minimizable: true,
// 		items: form
// 	});

// 	win.show();
// })


Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.form.Field.prototype.msgTarget = 'side';
	var txtusername = new Ext.form.TextField({
		width: 140,
		allowBlank: false,
		maxLength: 20,
		name: 'username',
		fieldLabel: '用户名称',
		blankText: '请输入用户名',
		maxLengthText: '用户名不能超过20个字符'
	});
	var txtpassword = new Ext.form.TextField({
		width: 140,
		allowBlank: false,
		maxLength: 20,
		inputType: 'password',
		name: 'password',
		fieldLabel: '密码',
		blankText: '请输入密码',
		maxLengthText: '密码不能超过20个字符'
	});
	var form = new Ext.form.FormPanel({
		frame: true,
		title: '表单标题',
		style: 'margin:10px',
		html:'<div>这里是表单内容</div>',
		items: [txtusername, txtpassword]
	});
	var win = new Ext.Window({
		title: '窗口',
		width: 470,
		height: 374,
		html: '<div>这里是窗体内容</div>',
		resizable: true,
		modal: true,
		closable: true,
		maximizable: true,
		minimizable: true,
		items: form
	});
	win.show();
})
