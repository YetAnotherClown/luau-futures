"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34],{8375:e=>{e.exports=JSON.parse('{"functions":[{"name":"after","desc":"After completion, passes the Result of the current future\\nto the closure, returning a new Future.\\r","params":[{"name":"fn","desc":"","lua_type":"(Result<E, U...>) -> Future<E, T...>"}],"returns":[{"desc":"","lua_type":"Future<E, T...>"}],"function_type":"method","source":{"line":39,"path":"src/Future.luau"}},{"name":"andThen","desc":"After successfully resolving, create and execute another Future\\ncreated within the closure, with the Ok result passed in the\\nclosure arguments, otherwise it is never executed.\\r","params":[{"name":"fn","desc":"","lua_type":"<T>(U...) -> Future<E, T...>"}],"returns":[{"desc":"","lua_type":"Future<E, T...>"}],"function_type":"method","source":{"line":62,"path":"src/Future.luau"}},{"name":"await","desc":"Yields until the Future finishes execution, then returns the result.\\n:::warning\\nBecause this is a yielding method, it is suggested that it is only\\nused within Futures, as opposed to the main thread. \\\\\\n\\\\\\nSee [Future:poll] for the recommended way of executing Futures.\\n:::\\r","params":[],"returns":[{"desc":"","lua_type":"Result<E, U...>"}],"function_type":"method","yields":true,"source":{"line":94,"path":"src/Future.luau"}},{"name":"inspectErr","desc":"Allows you to read the error value of a Future before passing it on.\\r","params":[{"name":"fn","desc":"","lua_type":"(E) -> ()"}],"returns":[{"desc":"","lua_type":"Future<E, U...>"}],"function_type":"method","source":{"line":112,"path":"src/Future.luau"}},{"name":"inspectOk","desc":"Allows you to read the success value of a Future before passing it on.\\r","params":[{"name":"fn","desc":"","lua_type":"(U...) -> ()"}],"returns":[{"desc":"","lua_type":"Future<E, U...>"}],"function_type":"method","source":{"line":128,"path":"src/Future.luau"}},{"name":"join","desc":"Joins the results of two futures into a table.\\nFutures of different types, Err and Ok will still\\nhave their results joined into a table.\\nResults of type Ok will be unwrapped in the table,\\nwhereas Results of type Err will not be unwrapped\\nand will be added as `Result<E, never>` in the table.\\r","params":[{"name":"otherFuture","desc":"","lua_type":"Future<E, T...>"}],"returns":[{"desc":"","lua_type":"Future<never, { Result<E, never> | (U..., T...) }>"}],"function_type":"method","source":{"line":151,"path":"src/Future.luau"}},{"name":"joinAll","desc":"Joins the results of two or more futures into a table.\\r","params":[{"name":"...","desc":"","lua_type":"Future<E, ...any>"}],"returns":[{"desc":"","lua_type":"Future<never, { Result<E, never> | ...any }>"}],"function_type":"method","source":{"line":177,"path":"src/Future.luau"}},{"name":"mapErr","desc":"Maps the type of the Err result of a Future.\\r","params":[{"name":"fn","desc":"","lua_type":"(E) -> T"}],"returns":[{"desc":"","lua_type":"Future<T, U...>"}],"function_type":"method","source":{"line":195,"path":"src/Future.luau"}},{"name":"mapOk","desc":"Maps the type of the Ok result of a Future.\\r","params":[{"name":"fn","desc":"","lua_type":"(U...) -> T..."}],"returns":[{"desc":"","lua_type":"Future<E, T...>"}],"function_type":"method","source":{"line":211,"path":"src/Future.luau"}},{"name":"orElse","desc":"On Err, executes another Future of the same type.\\r","params":[{"name":"fn","desc":"","lua_type":"(E) -> Future<E, U...>"}],"returns":[{"desc":"","lua_type":"Future<E, U...>"}],"function_type":"method","source":{"line":227,"path":"src/Future.luau"}},{"name":"unwrapOrElse","desc":"On Err, the result is passed to the closure to create a Ok result,\\nthen returns a Future with that Ok result.\\r","params":[{"name":"fn","desc":"","lua_type":"(E) -> U..."}],"returns":[{"desc":"","lua_type":"Future<never, U...>"}],"function_type":"method","source":{"line":253,"path":"src/Future.luau"}},{"name":"poll","desc":"Executes the Future on it\'s next resumption point,\\nreturning `Result::Pending` if it is not ready yet or\\n`Result::Ready` if it is ready.\\n:::danger\\nPolling a Future that is ready will return the same result.\\nThis will however not be guaranteed behavior, and you should\\navoid polling a Future that is already ready.\\n:::\\r","params":[],"returns":[{"desc":"","lua_type":"Poll<E, U...>"}],"function_type":"method","source":{"line":278,"path":"src/Future.luau"}},{"name":"new","desc":"Creates a new Future, taking an asynchronous callback and\\nparameters to pass into that callback.\\r","params":[{"name":"callback","desc":"","lua_type":"(T...) -> U..."},{"name":"...","desc":"","lua_type":"T..."}],"returns":[{"desc":"","lua_type":"Future<E, U...>"}],"function_type":"method","source":{"line":366,"path":"src/Future.luau"}}],"properties":[],"types":[],"name":"Future","desc":"A Future represents a read-only asynchronous value, one that may not\\nhave finished computation.\\nFutures are lazy in their computation, meaning execution will not begin\\nuntil [Future:poll] or [Future:await] is used.\\n## Types\\nYou should refer to the [Typechecking Guide](/docs/typechecking) for more information.\\n### Future\\nThis type should only be used when returning a Future from a function,\\nusing Futures.FutureLike will not provide intellisense.\\n### FutureLike\\nThis type should be used to typecheck function parameters, using\\nFutures.Future will not work as expected.\\r","source":{"line":28,"path":"src/Future.luau"}}')}}]);