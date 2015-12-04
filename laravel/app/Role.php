<?php

namespace App;


use Illuminate\Database\Eloquent\Model;
class Role extends Model
{
  public $timestamps = false;

  /**
   * The database table used by the model.
   *
   * @var string
   */
  protected $table = 'roles';

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = ['id', 'title'];

}
