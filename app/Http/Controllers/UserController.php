<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

class UserController extends Controller
{

    public function getAllUsers()
    {
        return response(['data' => User::all(), 'message' => 'all users data!', 'status' => true, 'statusCode' => env('HTTP_SERVER_CODE_OK')]);
    }

    public function getUser($id)
    {
        return response(['data' => User::find($id), 'message' => 'get user by id!', 'status' => true, 'statusCode' => env('HTTP_SERVER_CODE_OK')]);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                function ($attribute, $value, $fail) {
                    if (User::whereName($value)->count() > 0) {
                        $fail($value . ' is already used.');
                    }
                },
            ],
            'email' => [
                'required',
                'email',
                function ($attribute, $value, $fail) {
                    if (User::whereEmail($value)->count() > 0) {
                        $fail($value . ' is already used.');
                    }
                },
            ],
            'password' => 'required',
            'phone' => 'required',
        ]);

        if ($validator->fails()) {
            return response(['message' => 'Validation errors', 'errors' => $validator->errors(), 'status' => false], 422);
        }

        $input = $request->all();

        $hashed = Hash::make($input['password']);

        $name = $input['name'];
        $email = $input['email'];
        $phone = $input['phone'];

        $user = User::create([
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'password' => $hashed,
        ]);

        $saved = $user->save();

        if ($saved) {
            return response(['data' => [
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
            ], 'message' => 'user created!', 'status' => true, 'statusCode' => env('HTTP_SERVER_CODE_CREATED')]);
        } else {
            return response(['data' => [
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
            ], 'message' => "unable to create user, something went wrong.", 'status' => false, 'statusCode' => env('HTTP_SERVER_CODE_BAD_REQUEST')]);
        }
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
        ]);

        if ($validator->fails()) {
            // return response(['message' => 'Validation errors', 'errors' => $validator->errors(), 'status' => false], 422);
        }

        $input = $request->all();
        $phone = $input['phone'];

        $user = User::findOrFail($id);
        $user->phone = $phone;
        $saved = $user->save();

        if ($saved) {
            return response(['data' => [
                'phone' => $phone,
            ], 'message' => 'user updated!', 'status' => true, 'statusCode' => env('HTTP_SERVER_CODE_CREATED')]);
        } else {
            return response(['data' => [
                'phone' => $phone,
            ], 'message' => "unable to update user, something went wrong.", 'status' => false, 'statusCode' => env('HTTP_SERVER_CODE_BAD_REQUEST')]);
        }
        $user->update($request->all());

        return response()->json($user, 200);
    }

    public function delete($id)
    {
        User::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
