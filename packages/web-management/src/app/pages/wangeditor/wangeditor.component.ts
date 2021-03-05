import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

import WangEditor from 'wangeditor';

@Component({
  selector: 'app-wangeditor',
  templateUrl: './wangeditor.component.html',
  styleUrls: ['./wangeditor.component.scss']
})
export class WangeditorComponent implements OnInit, AfterViewInit{
  editor: any;
  title = 'web-management';
  @ViewChildren('wangEditor') wangEditors: QueryList<ElementRef>;

  ngOnInit(): void {
    // this.initEditorPlugin();
  }
  ngAfterViewInit(): void {
    this.initEditorPlugin();
  }

  private initEditorPlugin() {
    if (!this.wangEditors || this.wangEditors.length === 0) {
      return;
    }
    this.wangEditors.forEach((item: ElementRef) => {
      const editorMenu = item.nativeElement.querySelector('#editorMenu');
      const editorDom = item.nativeElement.querySelector('#editor');
      this.editor = new WangEditor(editorMenu, editorDom);
      this.setEditorConfig(this.editor);
      // this.editor = new WangEditor('#wangeditorId');
      this.editor.create();
      // if (!this.contentEditable) {
      //   this.editor.config.menus = [];
      //   this.editor.config.placeholder = '';
      //   // 更改zIndex设置，防止弹窗出现穿透
      //   this.editor.config.zIndex = 1;
      //   this.editor.create();
      //   // 设置编辑区域内容只读
      //   this.editor.$textElem.attr('contenteditable', this.contentEditable);
      // } else {
      //   this.setEditorConfig(this.editor);
      //   this.editor.create();
      // }

      // this.editor.txt.html(content);
    });
  }

  // 编辑器相关配置设置
  private setEditorConfig(editor) {
    const _this = this;
    // 不显示 placeholder
    editor.config.placeholder = '';
    // 使用 base64 保存图片
    // editor.config.uploadImgShowBase64 = true;
    // 菜单展示项配置
    editor.config.menus = this.getMenuConfig();
    // 自定义配置颜色（字体颜色、背景色）
    editor.config.colors = this.getColorConfig();
    // 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
    // 自定义字体
    editor.config.fontNames = this.getFontFamilyConfig();
    // 配置字号
    editor.config.fontSizes = this.getFontSizeConfig();
    // 多语言配置
    // editor.config.lang = this.language;
    // if (this.language !== 'zh-CN' && this.language !== 'en-US') {
    //   editor.config.languages['ja-JP'] = this.getLanguages();
    // }
    // // 引入 i18next 插件（多语言用）
    // editor.i18next = i18next;
    // 自定义上传图片配置
    // editor.config.customUploadImg = (files, insert) => {
    //   // files 是 input 中选中的文件列表
    //   // insert 是获取图片 url 后，插入到编辑器的方法
    //   for (const file of files) {
    //     const reader = new FileReader();
    //     reader.onloadend = (e) => {
    //       let fileContent = reader.result as string;
    //       fileContent = fileContent.split(',')[1];
    //       const formData = {
    //         fileName: file.name,
    //         file: fileContent,
    //       };
    //       _this.imageUploadService.customUploadImage(_this.uploadHost, formData).subscribe((result) => {
    //         insert(result.body);
    //       });
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };
    // 自定义上传视频配置
    // editor.config.customUploadVideo = (files, insertVideo) => {
    //   // files 是 input 中选中的文件列表
    //   // insertVideo 是获取视频 url 后，插入到编辑器的方法
    //   for (const file of files) {
    //     const reader = new FileReader();
    //     reader.onloadend = (e) => {
    //       let fileContent = reader.result as string;
    //       fileContent = fileContent.split(',')[1];
    //       const formData = {
    //         fileName: file.name,
    //         file: fileContent,
    //       };
    //       _this.imageUploadService.customUploadImage(_this.uploadHost, formData).subscribe((result) => {
    //         insertVideo(result.body);
    //       });
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };
    // 内容粘贴配置
    editor.config.pasteTextHandle = (content) => {
      // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
      // 这里过滤掉粘贴过来的文本样式
      return content;
    };
    // 内容发生改变时,系统将自动保存信息
    // editor.config.onchange = (html) => {
    //   // html 即变化之后的内容
    //   _this.change(html);
    // };

    // // 编辑区域失去焦点后,系统将自动保存信息
    // editor.config.onblur = (html) => {
    //   // html 即变化之后的内容
    //   _this.change(html);
    // };

    // 编辑区域的z-index默认为10000
    // 更改zIndex设置，防止弹窗出现穿透
    editor.config.zIndex = 1;
  }

  // 获取显示菜单项
  private getMenuConfig(): string[] {
    return [
      'bold', // 粗体
      'italic', // 斜体
      'underline', // 下划线
      'head', // 标题
      'fontName', // 字体
      'fontSize', // 字号
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 链接
      'quote', // 引用
      'list', // 列表
      'justify', // 对齐方式
      'image', // 插入图片
      'video', // 插入视频
      // 'undo', // 撤销 TODO => 当前版本存在bug，待版本升级更新
      // 'redo', // 重复 TODO => 当前版本存在bug，待版本升级更新
    ];
  }

  // 获取字体、背景颜色列表配置
  private getColorConfig(): string[] {
    return [
      '#000000',
      '#eeece0',
      '#1c487f',
      '#4d80bf',
      '#c24f4a',
      '#8baa4a',
      '#7b5ba1',
      '#46acc8',
      '#f9963b',
      '#ffffff',
    ];
  }

  // 获取字体列表配置
  private getFontFamilyConfig(): string[] {
    return ['宋体', '微软雅黑', 'Arial', 'Tahoma', 'Verdana'];
  }

  // 获取字号配置
  private getFontSizeConfig() {
    const fontSizes = {
      'x-small': { name: 'x-small', value: '1' },
      small: { name: 'small', value: '2' },
      normal: { name: 'normal', value: '3' },
      large: { name: 'large', value: '4' },
      'x-large': { name: 'x-large', value: '5' },
      'xx-large': { name: 'xx-large', value: '6' },
    };
    return fontSizes;
  }
}
