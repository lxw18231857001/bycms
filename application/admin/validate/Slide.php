<?php
// +----------------------------------------------------------------------
// | Yershop 开源网店系统
// +----------------------------------------------------------------------
// | Copyright (c) 2014 http://www.yershop.com All rights reserved.
// +----------------------------------------------------------------------
namespace app\admin\validate;
use think\Validate;
use think\Db;

class Slide extends Validate{
  protected $rule = [
        'title'  =>  'require|max:25',
		'url'  =>  'require|max:225',
		'cover_id'  => 'require|max:225',
        
    ];

    protected $message = [
        'title.require'  =>  '名称必须',
        'url.require'  =>  '链接必须',
		'cover_id.require'  => '图片必须',
    ];

    protected $scene = [
        'add'   =>  ['title','url','cover_id'],
        'edit'  =>  ['title','url','cover_id'],
    ];   
	
}
